'use strict';

const OAuth = require('./core/OAuth');
const Actions = require('./core/Actions');
const SessionBuilder = require('./core/SessionBuilder');
const AccountManager = require('./core/AccountManager');
const PlaylistManager = require('./core/PlaylistManager');
const InteractionManager = require('./core/InteractionManager');

const Utils = require('./utils/Utils');
const Request = require('./utils/Request');

const Search = require('./parser/youtube/Search');
const VideoInfo = require('./parser/youtube/VideoInfo');
const Channel = require('./parser/youtube/Channel');
const Playlist = require('./parser/youtube/Playlist');
const Library = require('./parser/youtube/Library');
const History = require('./parser/youtube/History');
const Comments = require('./parser/youtube/Comments');

const YTMusic = require('./core/Music');
const FilterableFeed = require('./core/FilterableFeed');
const TabbedFeed = require('./core/TabbedFeed');

const OldParser = require('./parser');

const Proto = require('./proto');

const EventEmitter = require('events');
const { PassThrough } = require('stream');

class Innertube {
  #axios;
  #player;
  
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
   * @param {object} [config.http_ent]
   * @param {object} [config.https_agent]
   */
  constructor(config) {
    this.config = config || {};
    return this.#init();
  }
  
  async #init() {
    const session = await new SessionBuilder(this.config).build();

    this.key = session.key;
    this.version = session.api_version;
    this.context = session.context;
    
    this.logged_in = false;
    this.player_url = session.player.url;
    this.sts = session.player.sts;
    
    this.#axios = session.axios;
    this.#player = session.player;
    
    /**
     * @fires Innertube#auth - fired when signing in to an account.
     * @fires Innertube#update-credentials - fired when the access token is no longer valid.
     * @type {EventEmitter}
     */
    this.ev = new EventEmitter();
    this.oauth = new OAuth(this.ev, session.axios);
    
    if (this.config.cookie) {
      this.auth_apisid = Utils.getStringBetweenStrings(this.config.cookie, 'PAPISID=', ';');
      this.auth_apisid = Utils.generateSidAuth(this.auth_apisid);
    }
    
    this.request = new Request(this);
    this.actions = new Actions(this);
    
    this.account = new AccountManager(this.actions);
    this.playlist = new PlaylistManager(this.actions);
    this.interact = new InteractionManager(this.actions);
    
    this.music = new YTMusic(this);
    
    return this;
  }

  /**
   * Signs in to a google account.
   *
   * @param {object} auth_info
   * @param {string} auth_info.access_token - Token used to sign in.
   * @param {string} auth_info.refresh_token - Token used to get a new access token.
   * @param {Date} auth_info.expires - Access token's expiration date, which is usually 24hrs-ish.
   * @returns {Promise.<void>}
   */
  signIn(auth_info = {}) {
    return new Promise(async (resolve) => {
      this.oauth.init(auth_info);

      if (this.oauth.isValidAuthInfo()) {
        await this.oauth.checkTokenValidity();
        this.#updateCredentials();
        return resolve();
      }

      this.ev.on('auth', (data) => {
        if (data.status === 'SUCCESS') {
          this.#updateCredentials();
          resolve();
        }
      });
    });
  }

  #updateCredentials() {
    this.access_token = this.oauth.getAccessToken();
    this.refresh_token = this.oauth.getRefreshToken();
    this.logged_in = true;
  }

  /**
   * Signs out of an account.
   *
   * @returns {Promise.<{ success: boolean, status_code: number }>}
   */
  async signOut() {
    if (!this.logged_in) throw new Utils.InnertubeError('You are not signed in');
    const response = await this.oauth.revokeAccessToken();
    response.success && (this.logged_in = false);
    return response;
  }
  
  /**
   * Retrieves video info.
   *
   * @param {string} video_id
   * @returns {Promise.<VideoInfo>}
   */
  async getInfo(video_id) {
    Utils.throwIfMissing({ video_id });
    const cpn = Utils.generateRandomString(16);
    
    const initial_info = this.actions.getVideoInfo(video_id, cpn);
    const continuation = this.actions.next({ video_id });
    
    const response = await Promise.all([ initial_info, continuation ]);
    return new VideoInfo(response, this.actions, this.#player, cpn);
  }
  
  /**
   * Retrieves basic video info.
   *
   * @param {string} video_id
   * @returns {Promise.<VideoInfo>}
   */
  async getBasicInfo(video_id) {
    Utils.throwIfMissing({ video_id });
    const cpn = Utils.generateRandomString(16);
  
    const response = await this.actions.getVideoInfo(video_id, cpn);
    return new VideoInfo([ response, {} ], this.actions, this.#player, cpn);
  }
  
  /**
   * Searches a given query. 
   * 
   * @param {string} query - search query.
   * @param {object} [filters] - search filters.
   * @param {string} [filters.upload_date] - filter videos by upload date, can be: any | last_hour | today | this_week | this_month | this_year
   * @param {string} [filters.type] - filter results by type, can be: any | video | channel | playlist | movie
   * @param {string} [filters.duration] - filter videos by duration, can be: any | short | medium | long 
   * @param {string} [filters.sort_by] - filter video results by order, can be: relevance | rating | upload_date | view_count
   * @returns {Promise.<Search>}
   */
  async search(query, filters = {}) {
    Utils.throwIfMissing({ query });
    
    const response = await this.actions.search({ query, filters });
    return new Search(this.actions, response.data);
  }
  
  /**
   * Retrieves search suggestions for a given query.
   * 
   * @param {string} query - the search query.
   * @param {object} [options] - search options.
   * @param {string} [options.client='YOUTUBE'] - client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
   * @returns {Promise.<{ query: string, results: string[] }>}
   */
  async getSearchSuggestions(query, options = { client: 'YOUTUBE' }) {
    Utils.throwIfMissing({ query });
    
    const response = await this.actions.getSearchSuggestions(options.client, query);
    if (options.client === 'YTMUSIC' && !response.data.contents) return [];

    const suggestions = new OldParser(this, response.data, {
      client: options.client,
      data_type: 'SEARCH_SUGGESTIONS'
    }).parse();

    return suggestions;
  }

  /**
   * Retrieves comments for a video.
   *
   * @param {string} video_id - the video id.
   * @param {string} [sort_by] - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
   * @returns {Promise.<Comments>}
   */
  async getComments(video_id, sort_by) {
    Utils.throwIfMissing({ video_id });
    
    const payload = Proto.encodeCommentsSectionParams(video_id, {
      sort_by: sort_by || 'TOP_COMMENTS'
    });

    const response = await this.actions.next({ ctoken: payload });

    return new Comments(this.actions, response.data);
  }

  /**
   * Retrieves YouTube's home feed (aka recommendations).
   *
   * @returns {Promise<FilterableFeed>}
   */
  async getHomeFeed() {
    const response = await this.actions.browse('FEwhat_to_watch');
    return new FilterableFeed(this.actions, response.data);
  }
  
  /**
   * Returns the account's library.
   *
   * @returns {Promise.<Library>}
   */
  async getLibrary() {
    const response = await this.actions.browse('FElibrary');
    return new Library(response.data, this.actions);
  }
  
  /**
   * Retrieves watch history.
   * Which can also be achieved through {@link getLibrary()}.
   * 
   * @returns {Promise.<History>}
   */
  async getHistory() {
    const response = await this.actions.browse('FEhistory');
    return new History(this.actions, response.data);
  }

  /**
   * Retrieves trending content.
   * 
   * @returns {Promise<TabbedFeed>}
   */
  async getTrending() {
    const response = await this.actions.browse('FEtrending');
    return new TabbedFeed(this.actions, response.data);
  }

  /**
   * Retrieves subscriptions feed.
   *
   * @returns {Promise.<{ items: Array.<{ date: string, videos: object[] }>}>}
   */
  async getSubscriptionsFeed() {
    const response = await this.actions.browse('FEsubscriptions');
    
    const subsfeed = new OldParser(this, response, {
      client: 'YOUTUBE',
      data_type: 'SUBSFEED'
    }).parse();

    return subsfeed;
  }
  
  /**
   * Retrieves contents for a given channel. (WIP)
   *
   * @param {string} id - channel id
   * @returns {Promise<Channel>}
   */
  async getChannel(id) {
    Utils.throwIfMissing({ id });
    const response = await this.actions.browse(id);
    return new Channel(this.actions, response.data);
  }
  
  /**
   * Retrieves notifications.
   *
   * @returns {Promise.<{ items: Array.<{ title: string, sent_time: string, channel_name: string, channel_thumbnail: object, video_thumbnail: object, video_url: string, read: boolean, notification_id: string }>}>}
   */
  async getNotifications() {
    const response = await this.actions.notifications('get_notification_menu');
    
    const notifications = new OldParser(this, response.data, {
      client: 'YOUTUBE',
      data_type: 'NOTIFICATIONS'
    }).parse();

    return notifications;
  }

  /**
   * Retrieves unseen notifications count.
   *
   * @returns {Promise.<number>}
   */
  async getUnseenNotificationsCount() {
    const response = await this.actions.notifications('get_unseen_count');
    return response.data.unseenCount;
  }

  /**
   * Retrieves the contents of a given playlist.
   * 
   * @param {string} playlist_id - the id of the playlist.
   * @returns {Promise.<Playlist>}
   */
  async getPlaylist(playlist_id) {
    Utils.throwIfMissing({ playlist_id });
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
    Utils.throwIfMissing({ video_id });
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
  get axios() {
    return this.#axios; 
  }
}

module.exports = Innertube;
