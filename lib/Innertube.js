'use strict';

const Axios = require('axios');
const Stream = require('stream');
const Parser = require('./parser');
const CancelToken = Axios.CancelToken;
const EventEmitter = require('events');

const OAuth = require('./core/OAuth');
const Actions = require('./core/Actions');
const Livechat = require('./core/Livechat');
const SessionBuilder = require('./core/SessionBuilder');
const AccountManager = require('./core/AccountManager');
const PlaylistManager = require('./core/PlaylistManager');
const InteractionManager = require('./core/InteractionManager');

const Utils = require('./utils/Utils');
const Request = require('./utils/Request');
const Constants = require('./utils/Constants');

const Proto = require('./proto');
const NToken = require('./deciphers/NToken');
const Signature = require('./deciphers/Signature');

/**
 * Innertube instance.
 * @namespace
 */
class Innertube {
  /**
   * @type {AxiosInstance}
   */
  #axios;
  #player;
  
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
  constructor(config) {
    this.config = config || {};
    return this.#init();
  }
  
  async #init() {
    const session = await new SessionBuilder(this.config).build();

    this.#axios = session.axios;
    this.key = session.key;
    this.version = session.api_version;
    this.context = session.context;
    
    this.logged_in = false;
    this.player_url = session.player.url;
    this.sts = session.player.sts;
    
    this.#player = session.player;
    
    /**
     * @fires Innertube#auth - fired when signing in to an account.
     * @fires Innertube#update-credentials - fired when the access token is no longer valid.
     * @type {EventEmitter}
     */
    this.ev = new EventEmitter();
    this.oauth = new OAuth(this.ev, this.#axios);
    
    if (this.config.cookie) {
      this.auth_apisid = Utils.getStringBetweenStrings(this.config.cookie, 'PAPISID=', ';');
      this.auth_apisid = Utils.generateSidAuth(this.auth_apisid);
    }
    
    this.request = new Request(this);
    this.actions = new Actions(this);
    
    this.account = new AccountManager(this.actions);
    this.playlist = new PlaylistManager(this.actions);
    this.interact = new InteractionManager(this.actions);
    
    return this;
  }

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
   * @returns {Promise.<{ success: boolean; status_code: number }>}
   */
  async signOut() {
    if (!this.logged_in) throw new Utils.InnertubeError('You are not signed in');
    const response = await this.oauth.revokeAccessToken();
    response.success && (this.logged_in = false);
    return response;
  }
  
  /**
   * Searches a given query.
   *
   * @param {string} query - search query.
   * @param {object} [options] - search options.
   * @param {string} [options.client] - client used to perform the search, can be: `YTMUSIC` or `YOUTUBE`. 
   * @param {object} [options.filters] - search filters.
   * @param {string} [options.filters.upload_date] - filter videos by upload date, can be: any | last_hour | today | this_week | this_month | this_year
   * @param {string} [options.filters.type] - filter results by type, can be: any | video | channel | playlist | movie
   * @param {string} [options.filters.duration] - filter videos by duration, can be: any | short | medium | long 
   * @param {string} [options.filters.sort_by] - filter video results by order, can be: relevance | rating | upload_date | view_count
   *
   * @returns {Promise.<{ query: string; corrected_query: string; estimated_results: number; videos: object[] } |
   * { results: { songs: object[]; videos: object[]; albums: object[]; community_playlists: object[] } }>} 
   */
  async search(query, options = { client: 'YOUTUBE' }) {
    Utils.throwIfMissing({ query });
    
    const response = await this.actions.search({ query, options, client: options.client });

    const results = new Parser(this, response.data, {
      query,
      client: options.client,
      data_type: 'SEARCH'
    }).parse();

    return results;
  }

  /**
   * Retrieves search suggestions for a given query.
   * 
   * @param {string} query - the search query.
   * @param {object} [options] - search options.
   * @param {string} [options.client='YOUTUBE'] - client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
   * 
   * @returns {Promise.<{ query: string; results: string[] }>}
   */
  async getSearchSuggestions(query, options = { client: 'YOUTUBE' }) {
    Utils.throwIfMissing({ query });
    
    const response = await this.actions.getSearchSuggestions(options.client, query);
    if (options.client === 'YTMUSIC' && !response.data.contents) return [];

    const suggestions = new Parser(this, response.data, {
      client: options.client,
      data_type: 'SEARCH_SUGGESTIONS'
    }).parse();

    return suggestions;
  }

  /**
   * Retrieves video info.
   * @param {string} video_id - the video id.
   * @return {Promise.<{ title: string; description: string; thumbnail: []; metadata: object }>}
   */
  async getDetails(video_id) {
    Utils.throwIfMissing({ video_id });
    
    const response = await this.actions.getVideoInfo(video_id);
    const continuation = await this.actions.next({ video_id });
    response.continuation = continuation.data;
    
    const details = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'VIDEO_INFO'
    }).parse();

    const livechat_ctoken = continuation.data.contents?.twoColumnWatchNextResults
      ?.conversationBar?.liveChatRenderer?.continuations?.find((continuation) => continuation.reloadContinuationData)
      .reloadContinuationData.continuation;

    details.like = () => this.actions.engage('like/like', { video_id });
    details.dislike = () => this.actions.engage('like/dislike', { video_id });
    details.removeLike = () => this.actions.engage('like/removelike', { video_id });
    details.subscribe = () => this.actions.engage('subscription/subscribe', { channel_id: details.metadata.channel_id });
    details.unsubscribe = () => this.actions.engage('subscription/unsubscribe', { channel_id: details.metadata.channel_id });
    details.comment = (text) => this.actions.engage('comment/create_comment', { video_id, text });
    details.getComments = (sort_by) => this.getComments(video_id, sort_by);
    details.getLivechat = () => new Livechat(this, livechat_ctoken, details.metadata.channel_id, video_id);
    details.setNotificationPreferences = (type) => this.actions.notifications('modify_channel_preference', { channel_id: details.metadata.channel_id, pref: type || 'NONE' });

    return details;
  }

  /**
   * Retrieves comments for a given video.
   *
   * @param {string} video_id - the video id.
   * @param {string} [sort_by] - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
   * @return {Promise.<{ page_count: number; comment_count: number; items: object[]; }>}
   */
  async getComments(video_id, sort_by) {
    Utils.throwIfMissing({ video_id });
    
    const payload = Proto.encodeCommentsSectionParams(video_id, {
      sort_by: sort_by || 'TOP_COMMENTS'
    });

    const response = await this.actions.next({ ctoken: payload });
    const comments = new Parser(this, response.data, {
      video_id,
      client: 'YOUTUBE',
      data_type: 'COMMENTS'
    }).parse();

    return comments;
  }

  /**
   * Retrieves contents for a given channel. (WIP)
   * @param {string} id - channel id
   * @return {Promise.<{ title: string; description: string; metadata: object; content: object }>}
   */
  async getChannel(id) {
    Utils.throwIfMissing({ id });
    
    const response = await this.actions.browse(id);
    
    const channel_info = new Parser(this, response.data, {
      client: 'YOUTUBE',
      data_type: 'CHANNEL'
    }).parse();

    return channel_info;
  }

  /**
   * Retrieves watch history.
   * @returns {Promise.<{ items: { date: string; videos: object[] }[] }>}
   */
  async getHistory() {
    const response = await this.actions.browse('FEhistory');
    
    const history = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'HISTORY'
    }).parse();

    return history;
  }

  /**
   * Retrieves home feed (aka recommendations).
   * @returns {Promise.<{ videos: { id: string; title: string; description: string; channel: string; metadata: object }[] }>}
   */
  async getHomeFeed() {
    const response = await this.actions.browse('FEwhat_to_watch');
    
    const homefeed = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'HOMEFEED'
    }).parse();

    return homefeed;
  }

  /**
   * Retrieves trending content.
   * @returns {Promise.<{ now: { content: { title: string; videos: object[]; }[] };
   * music: { getVideos: Promise.<Array.<object>>; }; gaming: { getVideos: Promise.<Array.<object>>; };
   * movies: { getVideos: Promise.<Array.<object>>; } }>}
   */
  async getTrending() {
    const response = await this.actions.browse('FEtrending');
    
    const trending = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'TRENDING'
    }).parse();

    return trending;
  }
  
  /**
   * @todo finish this
   * WIP
   */
  async getLibrary() {
    const response = await this.actions.browse('FElibrary');
    
    const library = new Parser(this, response.data, {
      client: 'YOUTUBE',
      data_type: 'LIBRARY'
    }).parse();

    return library;
  }

  /**
   * Retrieves subscriptions feed.
   * @returns {Promise.<{ items: { date: string; videos: object[] }[] }>}
   */
  async getSubscriptionsFeed() {
    const response = await this.actions.browse('FEsubscriptions');
    
    const subsfeed = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'SUBSFEED'
    }).parse();

    return subsfeed;
  }

  /**
   * Retrieves notifications.
   * @returns {Promise.<{ items: { title: string; sent_time: string; channel_name: string; channel_thumbnail: object; video_thumbnail: object; video_url: string; read: boolean; notification_id: string }[] }>}
   */
  async getNotifications() {
    const response = await this.actions.notifications('get_notification_menu');
    
    const notifications = new Parser(this, response.data, {
      client: 'YOUTUBE',
      data_type: 'NOTIFICATIONS'
    }).parse();

    return notifications;
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
   * Retrieves lyrics for a given song if available.
   * 
   * @param {string} video_id 
   * @returns {Promise.<string>}
   */
  async getLyrics(video_id) {
    Utils.throwIfMissing({ video_id });
    
    const continuation = await this.actions.next({ video_id: video_id, client: 'YTMUSIC' });
    const lyrics_tab = Utils.findNode(continuation, 'contents', 'Lyrics', 8, false);

    const response = await this.actions.browse(lyrics_tab.endpoint?.browseEndpoint.browseId, { client: 'YTMUSIC' });
    if (!response.data?.contents?.sectionListRenderer) throw new Utils.UnavailableContentError('Lyrics not available', { video_id });

    const lyrics = Utils.findNode(response.data, 'contents', 'runs', 6, false);
    return lyrics.runs[0].text;
  }

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
  async getPlaylist(playlist_id, options = { client: 'YOUTUBE' }) {
    Utils.throwIfMissing({ playlist_id });
    
    const response = await this.actions.browse(`VL${playlist_id}`, { client: options.client });
    const playlist = new Parser(this, response.data, {
      client: options.client,
      data_type: 'PLAYLIST'
    }).parse();

    return playlist;
  }

  /**
   * Internal method to process and filter formats.
   * 
   * @param {object} options 
   * @param {object} video_data 
   * 
   * @returns {object.<{ selected_format: {}; formats: [] }>}
   */
  #chooseFormat(options, video_data) {
    let formats = [];

    formats = formats
      .concat(video_data.streamingData.formats || [])
      .concat(video_data.streamingData.adaptiveFormats || []);

    formats.forEach((format) => {
      format.url = format.url || format.signatureCipher || format.cipher;

      if (format.signatureCipher || format.cipher) {
        format.url = new Signature(format.url, this.#player.signature_decipher).decipher();
      }

      const url_components = new URL(format.url);
      url_components.searchParams.set('cver', this.context.client.clientVersion);
      url_components.searchParams.set('ratebypass', 'yes');

      if (url_components.searchParams.get('n')) {
        url_components.searchParams.set('n', new NToken(this.#player.ntoken_decipher, url_components.searchParams.get('n')).transform());
      }

      format.url = url_components.toString();
      format.has_audio = !!format.audioBitrate || !!format.audioQuality;
      format.has_video = !!format.qualityLabel;

      delete format.cipher;
      delete format.signatureCipher;
    });

    let format;
    let bitrates;
    let filtered_formats;

    filtered_formats = ({
      'video': formats.filter((format) => format.has_video && !format.has_audio),
      'audio': formats.filter((format) => format.has_audio && !format.has_video),
      'videoandaudio': formats.filter((format) => format.has_video && format.has_audio)
    })[options.type] || formats.filter((format) => format.has_video && format.has_audio);

    let streams;

    options.type != 'audio' &&
      (streams = filtered_formats.filter((format) => format.mimeType.includes(options.format || 'mp4') && format.qualityLabel == options.quality)) ||
      (streams = filtered_formats.filter((format) => format.mimeType.includes(options.format || 'mp4')));

    !streams || !streams.length &&
      (streams = filtered_formats.filter((format) => format.quality == 'medium'));

    bitrates = streams.map((format) => format.bitrate);
    format = streams.filter((format) => format.bitrate === Math.max(...bitrates))[0];

    return { selected_format: format, formats };
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
   *
   * @returns {Promise.<{ selected_format: object; formats: object[] }>}
   */
  async getStreamingData(video_id, options = {}) {
    Utils.throwIfMissing({ video_id });
    
    options.quality = options.quality || '360p';
    options.type = options.type || 'videoandaudio';
    options.format = options.format || 'mp4';

    const data = await this.actions.getVideoInfo(video_id);
    const streaming_data = this.#chooseFormat(options, data);

    if (!streaming_data.selected_format)
      throw new Utils.NoStreamingDataError('Could not find any suitable format.', { video_id, options });

    return streaming_data;
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
   *
   * @return {Stream.PassThrough}
   */
  download(video_id, options = {}) {
    Utils.throwIfMissing({ video_id });
    
    options.quality = options.quality || '360p';
    options.type = options.type || 'videoandaudio';
    options.format = options.format || 'mp4';

    let cancel;
    let cancelled = false;
    
    const cpn = Utils.generateRandomString(16);
          
    const stream = new Stream.PassThrough();
    this.actions.getVideoInfo(video_id, cpn).then(async (video_data) => {
      if (video_data.playabilityStatus.status === 'LOGIN_REQUIRED')
        return stream.emit('error', { message: 'You must login to download age-restricted videos.', error_type: 'LOGIN_REQUIRED', playability_status: video_data.playabilityStatus.status });
      if (!video_data.streamingData)
        return stream.emit('error', { message: 'Streaming data not available.', error_type: 'NO_STREAMING_DATA', playability_status: video_data.playabilityStatus.status });

      const { selected_format: format, formats } = this.#chooseFormat(options, video_data);

      if (!format)
        return stream.emit('error', { message: 'Could not find any suitable format.', type: 'FORMAT_UNAVAILABLE' });

      const video_details = new Parser(this, video_data, { client: 'YOUTUBE', data_type: 'VIDEO_INFO' }).parse();
      stream.emit('info', { video_details, selected_format: format, formats });

      if (options.type == 'videoandaudio' && !options.range) {
        const response = await Axios.get(`${format.url}&cpn=${cpn}`, {
          responseType: 'stream',
          cancelToken: new CancelToken(function executor(c) { cancel = c; }),
          headers: Constants.STREAM_HEADERS
        }).catch((error) => error);

        if (response instanceof Error) {
          stream.emit('error', { message: response.message, type: 'REQUEST_FAILED' });
          return stream;
        } else {
          stream.emit('start');
        }

        let downloaded_size = 0;

        response.data.on('data', (chunk) => {
          downloaded_size += chunk.length;
          let size = (response.headers['content-length'] / 1024 / 1024).toFixed(2);
          let percentage = Math.floor((downloaded_size / response.headers['content-length']) * 100);

          stream.emit('progress', {
            size,
            percentage,
            chunk_size: chunk.length,
            downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2),
            raw_data: {
              chunk_size: chunk.length,
              downloaded: downloaded_size,
              size: response.headers['content-length']
            }
          });
        });

        response.data.on('error', (err) => {
          cancelled &&
            stream.emit('error', { message: 'The download was cancelled.', type: 'DOWNLOAD_CANCELLED' }) ||
            stream.emit('error', { message: err.message, type: 'DOWNLOAD_ABORTED' });
        });

        response.data.pipe(stream, { end: true });
      } else {
        const chunk_size = 1048576 * 10; // 10MB

        let chunk_start = (options.range && options.range.start || 0);
        let chunk_end = (options.range && options.range.end || chunk_size);
        let downloaded_size = 0;
        let must_end = false;

        stream.emit('start');
        
        const downloadChunk = async () => {
          (chunk_end >= format.contentLength || options.range) && (must_end = true);
          options.range && (format.contentLength = options.range.end);
          
          const response = await Axios.get(`${format.url}&cpn=${cpn}&range=${chunk_start}-${chunk_end || ''}`, {
            responseType: 'stream',
            cancelToken: new CancelToken(function executor(c) { cancel = c; }),
            headers: Constants.STREAM_HEADERS
          }).catch((error) => error);

          if (response instanceof Error) {
            stream.emit('error', { message: response.message, type: 'REQUEST_FAILED' });
            return stream;
          }

          response.data.on('data', (chunk) => {
            downloaded_size += chunk.length;

            let size = (format.contentLength / 1024 / 1024).toFixed(2);
            let percentage = Math.floor((downloaded_size / format.contentLength) * 100);

            stream.emit('progress', {
              size,
              percentage,
              chunk_size: chunk.length,
              downloaded_size: (downloaded_size / 1024 / 1024).toFixed(2),
              raw_data: {
                chunk_size: chunk.length,
                downloaded: downloaded_size,
                size: response.headers['content-length']
              }
            });
          });

          response.data.on('error', (err) => {
            cancelled &&
              stream.emit('error', { message: 'The download was cancelled.', type: 'DOWNLOAD_CANCELLED' }) ||
              stream.emit('error', { message: err.message, type: 'DOWNLOAD_ABORTED' });
          });

          response.data.on('end', () => {
            if (!must_end && !options.range) {
              chunk_start = chunk_end + 1;
              chunk_end += chunk_size;
              downloadChunk();
            }
          });

          response.data.pipe(stream, { end: must_end });
        };

        downloadChunk();
      }
    });

    stream.cancel = () => {
      cancelled = true;
      cancel();
    };

    return stream;
  }

  get axios() {
    return this.#axios;
  }
}

module.exports = Innertube;