import OAuth from "./core/OAuth.js";
import Actions from "./core/Actions.js";
import SessionBuilder from "./core/SessionBuilder.js";
import AccountManager from "./core/AccountManager.js";
import PlaylistManager from "./core/PlaylistManager.js";
import InteractionManager from "./core/InteractionManager.js";
import Search from "./parser/youtube/Search.js";
import VideoInfo from "./parser/youtube/VideoInfo.js";
import Channel from "./parser/youtube/Channel.js";
import Playlist from "./parser/youtube/Playlist.js";
import Library from "./parser/youtube/Library.js";
import History from "./parser/youtube/History.js";
import Comments from "./parser/youtube/Comments.js";
import NotificationsMenu from "./parser/youtube/NotificationsMenu.js";
import YTMusic from "./core/Music.js";
import FilterableFeed from "./core/FilterableFeed.js";
import TabbedFeed from "./core/TabbedFeed.js";
import Feed from "./core/Feed.js";
import EventEmitter from "./utils/EventEmitterLike";
import streamBrowserify from "stream-browserify";
import stream from "stream";
import Request from "./utils/Request.js";
import Constants from "./utils/Constants.js";
import utils from "./utils/Utils.js";
import Proto from "./proto/index.js";

const { PassThrough } = BROWSER ? streamBrowserify : stream;
const { InnertubeError, throwIfMissing, generateRandomString } = utils;
/** @namespace */
class Innertube {
    #player;
    #request;
    /**
     * @example
     * ```js
     * const Innertube = require('youtubei.js');
     * const youtube = await new Innertube();
     * ```
     * @param {object} [config]
     * @param {string} [config.gl]
     * @param {string} [config.cookie]
     * @param {boolean} [config.debug]
     * @param {object} [config.proxy]
     * @param {object} [config.http_agent]
     * @param {object} [config.https_agent]
     */
    constructor(config) {
        this.config = config || {};
        return this.#init();
    }
    async #init() {
        const request = new Request(this.config);
        const session = await new SessionBuilder(this.config, request.instance).build();
        /** @type {string} */
        this.key = session.key;
        /** @type {string} */
        this.version = session.api_version;
        /** @type {object} */
        this.context = session.context;
        /** @type {boolean} */
        this.logged_in = !!this.config.cookie;
        /** @type {number} */
        this.sts = session.player.sts;
        /** @type {string} */
        this.player_url = session.player.url;
        /** @type {import('./core/Player')} */
        this.#player = session.player;
        request.setSession(this);
        this.#request = request.instance;
        /**
         * @fires Innertube#auth - fired when signing in to an account.
         * @fires Innertube#update-credentials - fired when the access token is no longer valid.
         * @type {EventEmitter}
         */
        this.ev = new EventEmitter();
        this.oauth = new OAuth(this.ev, request.instance);
        this.actions = new Actions(this);
        this.account = new AccountManager(this.actions);
        this.playlist = new PlaylistManager(this.actions);
        this.interact = new InteractionManager(this.actions);
        this.music = new YTMusic(this);
        return this;
    }
    /**
     * Signs in to a google account.
     * @param {object} credentials
     * @param {string} credentials.access_token - Token used to sign in.
     * @param {string} credentials.refresh_token - Token used to get a new access token.
     * @param {Date} credentials.expires - Access token's expiration date, which is usually 24hrs-ish.
     * @returns {Promise.<void>}
     */
    signIn(credentials = {}) {
        return new Promise(async (resolve) => {
            this.oauth.init(credentials);
            if (this.oauth.validateCredentials()) {
                await this.oauth.checkAccessTokenValidity();
                this.logged_in = true;
                resolve();
            }
            this.ev.on('auth', (data) => {
                this.logged_in = true;
                if (data.status === 'SUCCESS')
                    resolve();
            });
        });
    }
    /**
     * Signs out of an account.
     * @returns {Promise.<{ success: boolean, status_code: number }>}
     */
    async signOut() {
        if (!this.logged_in)
            throw new InnertubeError('You are not signed in');
        const response = await this.oauth.revokeAccessToken();
        this.logged_in = false;
        return response;
    }
    /**
     * Retrieves video info.
     * @param {string} video_id
     * @returns {Promise.<VideoInfo>}
     */
    async getInfo(video_id) {
        throwIfMissing({ video_id });
        const cpn = generateRandomString(16);
        const initial_info = this.actions.getVideoInfo(video_id, cpn);
        const continuation = this.actions.next({ video_id });
        const response = await Promise.all([initial_info, continuation]);
        return new VideoInfo(response, this.actions, this.#player, cpn);
    }
    /**
     * Retrieves basic video info.
     * @param {string} video_id
     * @returns {Promise.<VideoInfo>}
     */
    async getBasicInfo(video_id) {
        throwIfMissing({ video_id });
        const cpn = generateRandomString(16);
        const response = await this.actions.getVideoInfo(video_id, cpn);
        return new VideoInfo([response, {}], this.actions, this.#player, cpn);
    }
    /**
     * Searches a given query.
     * @param {string} query - search query.
     * @param {object} [filters] - search filters.
     * @param {string} [filters.upload_date] - filter videos by upload date, can be: any | last_hour | today | this_week | this_month | this_year
     * @param {string} [filters.type] - filter results by type, can be: any | video | channel | playlist | movie
     * @param {string} [filters.duration] - filter videos by duration, can be: any | short | medium | long
     * @param {string} [filters.sort_by] - filter video results by order, can be: relevance | rating | upload_date | view_count
     * @returns {Promise.<Search>}
     */
    async search(query, filters = {}) {
        throwIfMissing({ query });
        const response = await this.actions.search({ query, filters });
        return new Search(this.actions, response.data);
    }
    /**
     * Retrieves search suggestions for a given query.
     * @param {string} query - the search query.
     */
    async getSearchSuggestions(query) {
        throwIfMissing({ query });
        const response = await this.#request({
            url: 'search',
            baseURL: Constants.URLS.YT_SUGGESTIONS,
            params: {
                q: query,
                ds: 'yt',
                client: 'youtube',
                xssi: 't',
                oe: 'UTF',
                gl: this.context.client.gl,
                hl: this.context.client.hl
            }
        });
        const data = JSON.parse(response.data.replace(')]}\'', ''));
        const suggestions = data[1].map((suggestion) => suggestion[0]);
        return suggestions;
    }
    /**
     * Retrieves comments for a video.
     * @param {string} video_id - the video id.
     * @param {string} [sort_by] - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
     * @returns {Promise.<Comments>}
     */
    async getComments(video_id, sort_by) {
        throwIfMissing({ video_id });
        const payload = Proto.encodeCommentsSectionParams(video_id, {
            sort_by: sort_by || 'TOP_COMMENTS'
        });
        const response = await this.actions.next({ ctoken: payload });
        return new Comments(this.actions, response.data);
    }
    /**
     * Retrieves YouTube's home feed (aka recommendations).
     * @returns {Promise<FilterableFeed>}
     */
    async getHomeFeed() {
        const response = await this.actions.browse('FEwhat_to_watch');
        return new FilterableFeed(this.actions, response.data);
    }
    /**
     * Returns the account's library.
     * @returns {Promise.<Library>}
     */
    async getLibrary() {
        const response = await this.actions.browse('FElibrary');
        return new Library(response.data, this.actions);
    }
    /**
     * Retrieves watch history.
     * Which can also be achieved with {@link getLibrary()}.
     * @returns {Promise.<History>}
     */
    async getHistory() {
        const response = await this.actions.browse('FEhistory');
        return new History(this.actions, response.data);
    }
    /**
     * Retrieves trending content.
     * @returns {Promise<TabbedFeed>}
     */
    async getTrending() {
        const response = await this.actions.browse('FEtrending');
        return new TabbedFeed(this.actions, response.data);
    }
    /**
     * Retrieves subscriptions feed.
     * @returns {Promise.<Feed>}
     */
    async getSubscriptionsFeed() {
        const response = await this.actions.browse('FEsubscriptions');
        return new Feed(this.actions, response.data);
    }
    /**
     * Retrieves contents for a given channel.
     * @param {string} id - channel id
     * @returns {Promise<Channel>}
     */
    async getChannel(id) {
        throwIfMissing({ id });
        const response = await this.actions.browse(id);
        return new Channel(this.actions, response.data);
    }
    /**
     * Retrieves notifications.
     * @returns {Promise.<NotificationsMenu>}
     */
    async getNotifications() {
        const response = await this.actions.notifications('get_notification_menu');
        return new NotificationsMenu(this.actions, response.data);
    }
    /**
     * Retrieves unseen notifications count.
     * @returns {Promise.<number>}
     */
    async getUnseenNotificationsCount() {
        const response = await this.actions.notifications('get_unseen_count');
        return response.data.unseenCount;
    }
    /**
     * Retrieves the contents of a given playlist.
     * @param {string} playlist_id - the id of the playlist.
     * @returns {Promise.<Playlist>}
     */
    async getPlaylist(playlist_id) {
        throwIfMissing({ playlist_id });
        const response = await this.actions.browse(`VL${playlist_id.replace(/VL/g, '')}`);
        return new Playlist(this.actions, response.data);
    }
    /**
     * An alternative to {@link download}.
     * Returns deciphered streaming data.
     *
     * @param {string} video_id - video id
     * @param {object} options - download options.
     * @param {string} options.quality - video quality; 360p, 720p, 1080p, etc...
     * @param {string} options.type - download type, can be: video, audio or videoandaudio
     * @param {string} options.format - file format
     * @returns {Promise.<object>}
     */
    async getStreamingData(video_id, options = {}) {
        const info = await this.getBasicInfo(video_id);
        return info.chooseFormat(options);
    }
    /**
     * Downloads a given video. If you only need the direct download link take a look at {@link getStreamingData}.
     *
     * @param {string} video_id - video id
     * @param {object} options - download options.
     * @param {string} [options.quality] - video quality; 360p, 720p, 1080p, etc...
     * @param {string} [options.type] - download type, can be: video, audio or videoandaudio
     * @param {string} [options.format] - file format
     * @param {object} [options.range] - download range, indicates which bytes should be downloaded.
     * @param {number} options.range.start - the beginning of the range.
     * @param {number} options.range.end - the end of the range.
     * @returns {PassThrough}
     */
    download(video_id, options = {}) {
        throwIfMissing({ video_id });
        const stream = new PassThrough();
        (async () => {
            const info = await this.getBasicInfo(video_id);
            stream.emit('info', info);
            info.download(options, stream);
        })();
        return stream;
    }
    getPlayer() {
        return this.#player;
    }
    /** @readonly */
    get request() {
        return this.#request;
    }
}
export default Innertube;
