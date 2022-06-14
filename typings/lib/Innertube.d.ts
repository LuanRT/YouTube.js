export = Innertube;
/**
 * Innertube instance.
 * @namespace
 */
declare class Innertube {
    /**
     * @example
     * ```js
     * const Innertube = require('youtubei.js');
     * const youtube = await new Innertube();
     * ```
     *
     * @param {object} [config]
     * @param {string} [config.gl]
     * @param {string} [config.cookie]
     * @param {boolean} [config.debug]
     * @param {object} [config.proxy]
     * @param {object} [config.httpAgent]
     * @param {object} [config.httpsAgent]
     *
     * @returns {Innertube}
     * @constructor
     */
    constructor(config?: {
        gl?: string;
        cookie?: string;
        debug?: boolean;
        proxy?: object;
        httpAgent?: object;
        httpsAgent?: object;
    });
    config: {
        gl?: string;
        cookie?: string;
        debug?: boolean;
        proxy?: object;
        httpAgent?: object;
        httpsAgent?: object;
    };
    key: any;
    version: any;
    context: any;
    logged_in: boolean;
    player_url: any;
    sts: any;
    /**
     * @fires Innertube#auth - fired when signing in to an account.
     * @fires Innertube#update-credentials - fired when the access token is no longer valid.
     * @type {EventEmitter}
     */
    ev: EventEmitter;
    oauth: OAuth;
    auth_apisid: any;
    request: Request;
    actions: Actions;
    account: AccountManager;
    playlist: PlaylistManager;
    interact: InteractionManager;
    music: YTMusic;
    /**
     * Signs in to a google account.
     *
     * @param {object} auth_info
     * @param {string} auth_info.access_token - Token used to sign in.
     * @param {string} auth_info.refresh_token - Token used to get a new access token.
     * @param {Date} auth_info.expires - Access token's expiration date, which is usually 24hrs-ish.
     *
     * @returns {Promise.<void>}
     */
    signIn(auth_info?: {
        access_token: string;
        refresh_token: string;
        expires: Date;
    }): Promise<void>;
    access_token: string;
    refresh_token: string;
    /**
     * Signs out of an account.
     * @returns {Promise.<{ success: boolean; status_code: number }>}
     */
    signOut(): Promise<{
        success: boolean;
        status_code: number;
    }>;
    /**
     * Retrieves search suggestions for a given query.
     *
     * @param {string} query - the search query.
     * @param {object} [options] - search options.
     * @param {string} [options.client='YOUTUBE'] - client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
     *
     * @returns {Promise.<{ query: string; results: string[] }>}
     */
    getSearchSuggestions(query: string, options?: {
        client?: string;
    }): Promise<{
        query: string;
        results: string[];
    }>;
    /**
     * Retrieves video info.
     * @returns {Promise.<VideoInfo>}
     */
    getInfo(video_id: any): Promise<VideoInfo>;
    /**
     * Searches a given query.
     *
     * @param {string} query - search query.
     * @param {object} [filters] - search filters.
     * @param {string} [filters.upload_date] - filter videos by upload date, can be: any | last_hour | today | this_week | this_month | this_year
     * @param {string} [filters.type] - filter results by type, can be: any | video | channel | playlist | movie
     * @param {string} [filters.duration] - filter videos by duration, can be: any | short | medium | long
     * @param {string} [filters.sort_by] - filter video results by order, can be: relevance | rating | upload_date | view_count
     *
     * @returns {Promise.<Search>}
     */
    search(query: string, filters?: {
        upload_date?: string;
        type?: string;
        duration?: string;
        sort_by?: string;
    }): Promise<Search>;
    /**
     * Retrieves video info.
     *
     * @deprecated do not use this, it is slow and inefficient.
     * Use {@link getInfo} instead.
     *
     * @param {string} video_id - the video id.
     * @return {Promise.<{ title: string; description: string; thumbnail: []; metadata: object }>}
     */
    getDetails(video_id: string): Promise<{
        title: string;
        description: string;
        thumbnail: [];
        metadata: object;
    }>;
    /**
     * This is temorary, will replace getDetails() in the future.
     * @param {*} video_id
     * @returns
     */
    _getDetails(video_id: any): Promise<Video>;
    /**
     * Retrieves comments for a video.
     *
     * @param {string} video_id - the video id.
     * @param {string} [sort_by] - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
     * @return {Promise.<{ page_count: number; comment_count: number; items: object[]; }>}
     */
    getComments(video_id: string, sort_by?: string): Promise<{
        page_count: number;
        comment_count: number;
        items: object[];
    }>;
    /**
     * Retrieves contents for a given channel. (WIP)
     * @param {string} id - channel id
     * @return {Promise<Channel>}
     */
    getChannel(id: string): Promise<Channel>;
    /**
     * Retrieves watch history.
     * @returns {Promise.<{ items: { date: string; videos: object[] }[] }>}
     */
    getHistory(): Promise<{
        items: {
            date: string;
            videos: object[];
        }[];
    }>;
    /**
     * Retrieves YouTube's home feed (aka recommendations).
     * @returns {Promise<HomeFeed>}
     */
    getHomeFeed(): Promise<HomeFeed>;
    /**
     * Retrieves trending content.
     *
     * @returns {Promise<Trending>}
     */
    getTrending(): Promise<Trending>;
    /**
     * @todo finish this
     * WIP
     */
    getLibrary(): Promise<any>;
    /**
     * Retrieves subscriptions feed.
     * @returns {Promise.<{ items: { date: string; videos: object[] }[] }>}
     */
    getSubscriptionsFeed(): Promise<{
        items: {
            date: string;
            videos: object[];
        }[];
    }>;
    /**
     * Retrieves notifications.
     * @returns {Promise.<{ items: { title: string; sent_time: string; channel_name: string; channel_thumbnail: object; video_thumbnail: object; video_url: string; read: boolean; notification_id: string }[] }>}
     */
    getNotifications(): Promise<{
        items: {
            title: string;
            sent_time: string;
            channel_name: string;
            channel_thumbnail: object;
            video_thumbnail: object;
            video_url: string;
            read: boolean;
            notification_id: string;
        }[];
    }>;
    /**
     * Retrieves unseen notifications count.
     * @returns {Promise.<number>}
     */
    getUnseenNotificationsCount(): Promise<number>;
    /**
     * Retrieves lyrics for a given song if available.
     *
     * @param {string} video_id
     * @returns {Promise.<string>}
     */
    getLyrics(video_id: string): Promise<string>;
    /**
     * Retrieves the contents of a given playlist.
     *
     * @param {string} playlist_id - the id of the playlist.
     * @param {object} options - `YOUTUBE` | `YTMUSIC`
     * @param {string} options.client - client used to parse the playlist, can be: `YTMUSIC` | `YOUTUBE`
     *
     * @returns {Promise.<
     *  { title: string; description: string; total_items: string; last_updated: string; views: string; items: [] } |
     *  { title: string; description: string; total_items: number; duration: string; year: string; items: [] }>}
     */
    getPlaylist(playlist_id: string, options?: {
        client: string;
    }): Promise<{
        title: string;
        description: string;
        total_items: string;
        last_updated: string;
        views: string;
        items: [];
    } | {
        title: string;
        description: string;
        total_items: number;
        duration: string;
        year: string;
        items: [];
    }>;
    /**
     * An alternative to {@link download}.
     * Returns deciphered streaming data.
     *
     * @param {string} video_id - video id
     * @param {object} options - download options.
     * @param {string} options.quality - video quality; 360p, 720p, 1080p, etc...
     * @param {string} options.type - download type, can be: video, audio or videoandaudio
     * @param {string} options.format - file format
     *
     * @returns {Promise.<{ selected_format: object; formats: object[] }>}
     */
    getStreamingData(video_id: string, options?: {
        quality: string;
        type: string;
        format: string;
    }): Promise<{
        selected_format: object;
        formats: object[];
    }>;
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
     *
     * @return {Stream.PassThrough}
     */
    download(video_id: string, options?: {
        quality?: string;
        type?: string;
        format?: string;
        range?: {
            start: number;
            end: number;
        };
    }): Stream.PassThrough;
    getPlayer(): any;
    /** @readonly */
    readonly get axios(): any;
    #private;
}
import EventEmitter = require("events");
import OAuth = require("./core/OAuth");
import Request = require("./utils/Request");
import Actions = require("./core/Actions");
import AccountManager = require("./core/AccountManager");
import PlaylistManager = require("./core/PlaylistManager");
import InteractionManager = require("./core/InteractionManager");
import YTMusic = require("./core/Music");
import VideoInfo = require("./parser/youtube/VideoInfo");
import Search = require("./parser/youtube/Search");
import Video = require("./core/Video");
import Channel = require("./core/Channel");
import HomeFeed = require("./core/HomeFeed");
import { Trending } from "./core/Trending";
import Stream = require("stream");
