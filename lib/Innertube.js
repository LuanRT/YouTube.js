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

const Utils = require('./utils/Utils');
const Request = require('./utils/Request');
const Constants = require('./utils/Constants');

const Proto = require('./proto');
const NToken = require('./deciphers/NToken');
const Signature = require('./deciphers/Signature');

class Innertube {
  #oauth;
  #player;
  #actions;
  #retry_count;

  /**
   * ```js
   * const Innertube = require('youtubei.js');
   * const youtube = await new Innertube();
   * ```
   * 
   * @param {object} [config]
   * @param {string} [config.gl]
   * @param {string} [config.cookie]
   * @param {boolean} [config.debug]
   * 
   * @returns {Innertube}
   * @constructor
   */
  constructor(config) {
    this.config = config || {};
    this.#retry_count = 0;
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
    
    this.#player = session.player;
    
    /**
     * @fires Innertube#auth - fired when signing in to an account.
     * @fires Innertube#update-credentials - fired when the access token is no longer valid.
     * @type {EventEmitter}
     */
    this.ev = new EventEmitter();
    this.#oauth = new OAuth(this.ev);
    
    if (this.config.cookie) {
      this.auth_apisid = Utils.getStringBetweenStrings(this.config.cookie, 'PAPISID=', ';');
      this.auth_apisid = Utils.generateSidAuth(this.auth_apisid);
    }
    
    this.request = new Request(this);
    this.actions = new Actions(this);
    
    this.#initMethods();
    
    return this;
  }
  
  #initMethods() {
    this.account = {
      info: () => this.getAccountInfo(),
      getTimeWatched: () => { /* TODO: Implement this */ },
      settings: {
        notifications: {
          /**
           * Notify about activity from the channels you're subscribed to.
           * 
           * @param {boolean} new_value 
           * @returns {Promise.<{ success: boolean; status_code: string; }>}
           */
          setSubscriptions: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS, 'SPaccount_notifications', new_value),

          /**
           * Recommended content notifications.
           * 
           * @param {boolean} new_value 
           * @returns {Promise.<{ success: boolean; status_code: string; }>}
           */
          setRecommendedVideos: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.RECOMMENDED_VIDEOS, 'SPaccount_notifications', new_value),

          /**
           * Notify about activity on your channel.
           * 
           * @param {boolean} new_value 
           * @returns {Promise.<{ success: boolean; status_code: string; }>}
           */
          setChannelActivity: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.CHANNEL_ACTIVITY, 'SPaccount_notifications', new_value),

          /**
           * Notify about replies to your comments.
           * 
           * @param {boolean} new_value 
           * @returns {Promise.<{ success: boolean; status_code: string; }>}
           */
          setCommentReplies: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.COMMENT_REPLIES, 'SPaccount_notifications', new_value),

          /**
           * Notify when others mention your channel.
           * 
           * @param {boolean} new_value 
           * @returns {Promise.<{ success: boolean; status_code: string; }>}
           */
          setMentions: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.USER_MENTION, 'SPaccount_notifications', new_value),

          /**
           * Notify when others share your content on their channels.
           * 
           * @param {boolean} new_value 
           * @returns {Promise.<{ success: boolean; status_code: string; }>}
           */
          setSharedContent: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SHARED_CONTENT, 'SPaccount_notifications', new_value)
        },
        privacy: {
          /**
           * If set to true, your subscriptions won't be visible to others.
           * 
           * @param {boolean} new_value 
           * @returns {Promise.<{ success: boolean; status_code: string; }>}
           */
          setSubscriptionsPrivate: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.SUBSCRIPTIONS_PRIVACY, 'SPaccount_privacy', new_value),

          /**
           * If set to true, saved playlists won't appear on your channel.
           * 
           * @param {boolean} new_value 
           * @returns {Promise.<{ success: boolean; status_code: string; }>}
           */
          setSavedPlaylistsPrivate: (new_value) => this.#setSetting(Constants.ACCOUNT_SETTINGS.PLAYLISTS_PRIVACY, 'SPaccount_privacy', new_value)
        }
      }
    }

    this.interact = {
      /**
       * Likes a given video.
       * 
       * @param {string} video_id
       * @returns {Promise.<{ success: boolean; status_code: string; }>}
       */
      like: (video_id) => this.actions.engage('like/like', { video_id }),

      /**
       * Diskes a given video.
       * 
       * @param {string} video_id
       * @returns {Promise.<{ success: boolean; status_code: string; }>}
       */
      dislike: (video_id) => this.actions.engage('like/dislike', { video_id }),

      /**
       * Removes a like/dislike.
       * 
       * @param {string} video_id 
       * @returns {Promise.<{ success: boolean; status_code: string; }>} 
       */
      removeLike: (video_id) => this.actions.engage('like/removelike', { video_id }),

      /**
       * Posts a comment on a given video.
       * 
       * @param {string} video_id 
       * @param {string} text 
       * @returns {Promise.<{ success: boolean; status_code: string; }>}
       */
      comment: (video_id, text) => this.actions.engage('comment/create_comment', { video_id, text }),
      
      /**
       * Translates a given text using YouTube's comment translate feature.
       * 
       * @param {string} text
       * @param {string} target_language
       * @param {object} [args] - optional arguments
       * @param {string} [args.video_id]
       * @param {string} [args.comment_id]
       * 
       * @returns {Promise.<{ success: boolean; status_code: string; }>}
       */
      translate: async (text, target_language, args = {}) => {
        const response = await this.actions.engage('comment/perform_comment_action', {
          text, 
          video_id: args.video_id,
          comment_id: args.comment_id,
          target_language: target_language,
          comment_action: 'translate'
        });
        
        const translated_content = Utils.findNode(response.data, 'frameworkUpdates', 'content', 7, false);
        
        return {
          success: response.success,
          status_code: response.status_code,
          translated_content: translated_content.content
        }
      },
      
      /**
       * Subscribes to a given channel.
       * 
       * @param {string} channel_id 
       * @returns {Promise.<{ success: boolean; status_code: string; }>}
       */
      subscribe: (channel_id) => this.actions.engage('subscription/subscribe', { channel_id }),

      /**
       * Unsubscribes from a given channel.
       * 
       * @param {string} channel_id 
       * @returns {Promise.<{ success: boolean; status_code: string; }>}
       */
      unsubscribe: (channel_id) => this.actions.engage('subscription/unsubscribe', { channel_id }),

      /**
       * Changes notification preferences for a given channel.
       * Only works with channels you are subscribed to.
       * 
       * @param {string} channel_id 
       * @param {string} type PERSONALIZED | ALL | NONE
       * @returns {Promise.<{ success: boolean; status_code: string; }>} 
       */
      setNotificationPreferences: (channel_id, type) => this.actions.notifications('modify_channel_preference', { channel_id, pref: type || 'NONE' }),
    };

    this.playlist = {
      /**
       * Creates a playlist.
       * 
       * @param {string} title 
       * @param {Array.<string>} video_ids
       * 
       * @returns {Promise.<{ success: boolean; status_code: string; playlist_id: string; }>} 
       */
      create: async (title, video_ids) => {
        const response = await this.actions.playlist('playlist/create', { title, ids: video_ids });
        if (!response.success) return response;

        return {
          success: true,
          status_code: response.status_code,
          playlist_id: response.data.playlistId
        }
      },

      /**
       * Deletes a given playlist.
       * 
       * @param {string} playlist_id
       * @returns {Promise.<{ success: boolean; status_code: string; playlist_id: string;  }>} 
       */
      delete: async (playlist_id) => {
        const response = await this.actions.playlist('playlist/delete', { playlist_id });
        if (!response.success) return response;

        return {
          success: true,
          status_code: response.status_code,
          playlist_id
        }
      },

      /**
       * Adds an array of videos to a given playlist.
       * 
       * @param {string} playlist_id
       * @param {Array.<string>} video_ids
       * @returns {Promise.<{ success: boolean; status_code: string; playlist_id: string; }>} 
       */
      addVideos: async (playlist_id, video_ids) => {
        const response = await this.actions.playlist('browse/edit_playlist', {
          action: 'ACTION_ADD_VIDEO',
          playlist_id,
          ids: video_ids
        });

        if (!response.success) return response;

        return {
          success: true,
          status_code: response.status_code,
          playlist_id
        }
      },

      /**
       * Removes videos from a given playlist.
       * 
       * @param {string} playlist_id
       * @param {Array.<string>} video_ids
       * @returns {Promise.<{ success: boolean; status_code: string; playlist_id: string; }>}
       */
      removeVideos: async (playlist_id, video_ids) => {
        const plinfo = await this.actions.browse(`VL${playlist_id}`);

        const list = Utils.findNode(plinfo.data, 'contents', 'contents', 13, false);
        if (!list.isEditable) throw new Utils.InnertubeError('This playlist cannot be edited.', playlist_id);

        const videos = list.contents.filter((item) => video_ids.includes(item.playlistVideoRenderer.videoId));
        const set_video_ids = videos.map((video) => video.playlistVideoRenderer.setVideoId);

        const response = await this.actions.playlist('browse/edit_playlist', {
          action: 'ACTION_REMOVE_VIDEO',
          playlist_id,
          ids: set_video_ids
        });

        if (!response.success) return response;

        return {
          success: true,
          status_code: response.status_code,
          playlist_id
        }
      }
    };
  }

  /**
   * Internal method to perform changes on an account's settings.
   * 
   * @param {string} setting_id 
   * @param {string} type 
   * @param {string} new_value 
   * @returns {Promise.<{ success: boolean; status_code: string; }>}
   */
  async #setSetting(setting_id, type, new_value) {
    const response = await this.actions.browse(type);
    if (!response.success) return response;

    const contents = ({
      account_notifications: () => Utils.findNode(response.data, 'contents', 'Your preferences', 13, false).options,
      account_privacy: () => Utils.findNode(response.data, 'contents', 'settingsSwitchRenderer', 13, false).options
    })[type.trim()]();

    const option = contents.find((option) => option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemIdForClient == setting_id);

    const setting_item_id = option.settingsSwitchRenderer.enableServiceEndpoint.setSettingEndpoint.settingItemId;
    const set_setting = await this.actions.account('account/set_setting', { new_value: type == 'account_privacy' ? !new_value : new_value, setting_item_id });

    return {
      success: set_setting.success,
      status_code: set_setting.status_code,
    }
  }

  /**
   * Signs-in to a google account.
   *
   * @param {object} auth_info
   * @param {string} auth_info.access_token - Token used to sign in.
   * @param {string} auth_info.refresh_token - Token used to get a new access token.
   * @param {Date} auth_info.expires - Access token's expiration date, which is usually 24hrs-ish
   * @returns {Promise.<void>}
   */
  signIn(auth_info = {}) {
    return new Promise(async (resolve) => {
      this.#oauth.init(auth_info);

      if (this.#oauth.isValidAuthInfo()) {
        await this.#oauth.checkTokenValidity();
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
    this.access_token = this.#oauth.getAccessToken();
    this.refresh_token = this.#oauth.getRefreshToken();
    this.logged_in = true;
  }

  /**
   * Signs out of an account.
   * @returns {Promise.<{ success: boolean; status_code: number }>}
   */
  async signOut() {
    if (!this.logged_in) throw new Utils.InnertubeError('You are not signed in');
    const response = await this.#oauth.revokeAccessToken();
    response.success && (this.logged_in = false);
    return response;
  }

  /**
   * Retrieves account details.
   * @returns {Promise.<{ name: string; photo: Array<object>; country: string; language: string; }>}
   */
  async getAccountInfo() {
    const response = await this.actions.account('account/account_menu');
    if (!response.success) throw new Utils.InnertubeError('Could not get account info', response);

    const menu = Utils.findNode(response, 'actions', 'multiPageMenuRenderer', 6, false);

    return {
      name: menu.header.activeAccountHeaderRenderer.accountName.simpleText,
      photo: menu.header.activeAccountHeaderRenderer.accountPhoto.thumbnails,
      country: menu.sections[1].multiPageMenuSectionRenderer.items[2].compactLinkRenderer.subtitle.simpleText,
      language: menu.sections[1].multiPageMenuSectionRenderer.items[1].compactLinkRenderer.subtitle.simpleText
    }
  }

  /**
   * Searches on YouTube.
   *
   * @param {string} query - search query.
   * @param {object} options - search options.
   * @param {string} options.client - client used to perform the search, can be: `YTMUSIC` or `YOUTUBE`. 
   * @param {string} options.period - filter videos uploaded within a period, can be: any | hour | day | week | month | year
   * @param {string} options.order - filter results by order, can be: relevance | rating | age | views
   * @param {string} options.duration - filter video results by duration, can be: any | short | long
   *
   * @returns {Promise.<{ query: string; corrected_query: string; estimated_results: number; videos: [] } |
   * { results: { songs: []; videos: []; albums: []; community_playlists: [] } }>} 
   */
  async search(query, options = { client: 'YOUTUBE', period: 'any', order: 'relevance', duration: 'any' }) {
    const response = await this.actions.search({ query, options, is_ytm: options.client == 'YTMUSIC' });

    const results = new Parser(this, response.data, {
      query,
      client: options.client,
      data_type: 'SEARCH'
    }).parse();

    return results;
  }

  /**
   * Retrieves search suggestions.
   * 
   * @param {string} input - the search query.
   * @param {object} [options] - search options.
   * @param {string} [options.client='YOUTUBE'] - client used to retrieve search suggestions, can be: `YOUTUBE` or `YTMUSIC`.
   * 
   * @returns {Promise.<[{ text: string; bold_text: string }]>}
   */
  async getSearchSuggestions(input, options = { client: 'YOUTUBE' }) {
    const response = await this.actions.getSearchSuggestions(options.client, input);
    if (!response.success) throw new Utils.InnertubeError('Could not get search suggestions', response);
    if (options.client === 'YTMUSIC' && !response.data.contents) return [];

    const suggestions = new Parser(this, response.data, {
      input,
      client: options.client,
      data_type: 'SEARCH_SUGGESTIONS'
    }).parse();

    return suggestions;
  }

  /**
   * Retrieves video info.
   *
   * @param {string} video_id - video id
   * @return {Promise.<{ title: string; description: string; thumbnail: []; metadata: object }>}
   */
  async getDetails(video_id) {
    if (!video_id) throw new Utils.MissingParamError('Video id is missing');

    const response = await this.actions.getVideoInfo(video_id);
    const continuation = await this.actions.next({ video_id });
    continuation.success && (response.continuation = continuation.data);

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
   * Retrieves comments for a video.
   *
   * @param {string} video_id - video id
   * @param {string} [sort_by] - can be: `TOP_COMMENTS` or `NEWEST_FIRST`.
   * @return {Promise.<{ page_count: number; comment_count: number; items: []; }>}
   */
  async getComments(video_id, sort_by) {
    const payload = Proto.encodeCommentsSectionParams(video_id, {
      sort_by: sort_by || 'TOP_COMMENTS'
    });

    const response = await this.actions.next({ ctoken: payload });
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve comments', response);

    const comments = new Parser(this, response.data, {
      video_id,
      client: 'YOUTUBE',
      data_type: 'COMMENTS'
    }).parse();

    return comments;
  }

  /**
   * Retrieves contents for a given channel. (WIP)
   * 
   * @param {string} id - channel id
   * @return {Promise.<{ title: string; description: string; metadata: object; content: object }>}
   */
  async getChannel(id) {
    const response = await this.actions.browse(id);
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve channel info.', response);

    const channel_info = new Parser(this, response.data, {
      client: 'YOUTUBE',
      data_type: 'CHANNEL'
    }).parse();

    return channel_info;
  }

  /**
   * Retrieves watch history.
   * @returns {Promise.<{ items: [{ date: string; videos: [] }] }>}
   */
  async getHistory() {
    const response = await this.actions.browse('FEhistory');
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve watch history', response);

    const history = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'HISTORY'
    }).parse();

    return history;
  }

  /**
   * Retrieves YouTube's home feed (aka recommendations).
   * @returns {Promise.<{ videos: [{ id: string; title: string; description: string; channel: string; metadata: object }] }>}
   */
  async getHomeFeed() {
    const response = await this.actions.browse('FEwhat_to_watch');
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve home feed', response);

    const homefeed = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'HOMEFEED'
    }).parse();

    return homefeed;
  }

  /**
   * Retrieves trending content.
   * 
   * @returns {Promise.<{ now: { content: [{ title: string; videos: []; }] };
   * music: { getVideos: Promise.<Array>; }; gaming: { getVideos: Promise.<Array>; };
   * gaming: { getVideos: Promise.<Array>; }; }>}
   */
  async getTrending() {
    const response = await this.actions.browse('FEtrending');
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve trending content', response);

    const trending = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'TRENDING'
    }).parse();

    return trending;
  }
  
  /**
   * WIP
   */
  async getLibrary() {
    const response = await this.actions.browse('FElibrary');
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve library', response);

    const library = new Parser(this, response.data, {
      client: 'YOUTUBE',
      data_type: 'LIBRARY'
    }).parse();

    return library;
  }

  /**
   * Retrieves subscriptions feed.
   * @returns {Promise.<{ items: [{ date: string; videos: [] }] }>}
   */
  async getSubscriptionsFeed() {
    const response = this.actions.browse('FEsubscriptions');
    if (!response.success) throw new Utils.InnertubeError('Could not retrieve subscriptions feed', response);

    const subsfeed = new Parser(this, response, {
      client: 'YOUTUBE',
      data_type: 'SUBSFEED'
    }).parse();

    return subsfeed;
  }

  /**
   * Retrieves your notifications.
   * @returns {Promise.<{ items: [{ title: string; sent_time: string; channel_name: string; channel_thumbnail: {}; video_thumbnail: {}; video_url: string; read: boolean; notification_id: string }] }>}
   */
  async getNotifications() {
    const response = await this.actions.notifications('get_notification_menu');
    if (!response.success) throw new Utils.InnertubeError('Could not fetch notifications', response);

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
    if (!response.success) throw new Utils.InnertubeError('Could not get unseen notifications count', response);
    return response.data.unseenCount;
  }

  /**
   * Retrieves lyrics for a given song if available.
   * 
   * @param {string} video_id 
   * @returns {Promise.<string>}
   */
  async getLyrics(video_id) {
    const continuation = await this.actions.next({ video_id: video_id, is_ytm: true });
    if (!continuation.success) throw new Utils.InnertubeError('Could not retrieve lyrics', continuation);

    const lyrics_tab = Utils.findNode(continuation, 'contents', 'Lyrics', 8, false);

    const response = await this.actions.browse(lyrics_tab.endpoint?.browseEndpoint.browseId, { is_ytm: true });
    if (!response.success || !response.data?.contents?.sectionListRenderer) throw new Utils.UnavailableContentError('Lyrics not available', { video_id });

    const lyrics = Utils.findNode(response.data, 'contents', 'runs', 6, false);
    return lyrics.runs[0].text;
  }

  /**
   * Retrieves a given playlist.
   * 
   * @param {string} playlist_id - playlist id.
   * @param {object} options - { client: YOUTUBE | YTMUSIC }
   * @param {string} options.client - client used to parse the playlist, can be: `YTMUSIC` | `YOUTUBE`
   * @returns {Promise.<
   *  { title: string; description: string; total_items: string; last_updated: string; views: string; items: [] } |
   *  { title: string; description: string; total_items: number; duration: string; year: string; items: [] }>}
   */
  async getPlaylist(playlist_id, options = { client: 'YOUTUBE' }) {
    const response = await this.actions.browse(`VL${playlist_id}`, { is_ytm: options.client == 'YTMUSIC' });
    if (!response.success) throw new Utils.InnertubeError('Could not get playlist', response);

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
   * @param {string} id - video id
   * @param {object} options - download options.
   * @param {string} options.quality - video quality; 360p, 720p, 1080p, etc...
   * @param {string} options.type - download type, can be: video, audio or videoandaudio
   * @param {string} options.format - file format
   *
   * @returns {Promise.<{ selected_format: {}; formats: [] }>}
   */
  async getStreamingData(id, options = {}) {
    options.quality = options.quality || '360p';
    options.type = options.type || 'videoandaudio';
    options.format = options.format || 'mp4';

    const data = await this.actions.getVideoInfo(id);
    const streaming_data = this.#chooseFormat(options, data);

    if (!streaming_data.selected_format)
      throw new Utils.NoStreamingDataError('Could not find any suitable format.', { id, options });

    return streaming_data;
  }

  /**
   * Downloads a given video. If you only need the direct download link take a look at {@link getStreamingData}.
   * 
   * @param {string} id - video id
   * @param {object} options - download options.
   * @param {string} [options.quality] - video quality; 360p, 720p, 1080p, etc...
   * @param {string} [options.type] - download type, can be: video, audio or videoandaudio
   * @param {string} [options.format] - file format
   *
   * @return {Stream.PassThrough}
   */
  download(id, options = {}) {
    if (!id) throw new Utils.MissingParamError('Video id is missing');

    options.quality = options.quality || '360p';
    options.type = options.type || 'videoandaudio';
    options.format = options.format || 'mp4';

    let cancel;
    let cancelled = false;
    
    const cpn = Utils.generateRandomString(16);
          
    const stream = new Stream.PassThrough();
    this.actions.getVideoInfo(id, cpn).then(async (video_data) => {
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
}

module.exports = Innertube;