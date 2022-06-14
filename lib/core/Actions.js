'use strict';

const Uuid = require('uuid');
const Proto = require('../proto');
const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');

/**
* API response.
* @typedef {Promise.<{ success: boolean; status_code: number; data: object; }>} Response
*/
  
/** namespace **/
class Actions {
  #session;
  #request;
  
  /**
   * @param {Innertube} session
   * @constructor
   */
  constructor(session) {
    this.#session = session;
    this.#request = session.request;
  }
  
  /**
   * Covers `/browse` endpoint, mostly used to access
   * YouTube's sections such as the home feed, etc 
   * and sometimes to retrieve continuations.
   * 
   * @param {string} id - browseId or a continuation token
   * @param {object} args - additional arguments 
   * @param {string} [args.params]
   * @param {boolean} [args.is_ytm]
   * @param {boolean} [args.is_ctoken]
   * @param {string} [args.client]
   * 
   * @returns {Response}
   */
  async browse(id, args = {}) {
    if (this.#needsLogin(id) && !this.#session.logged_in)
      throw new Utils.InnertubeError('You are not signed in');
    
    const data = {};
    
    args.params &&
      (data.params = args.params);
      
    args.is_ctoken &&
      (data.continuation = id) ||
      (data.browseId = id);
    
    args.client &&
      (data.client = args.client);
      
    const response = await this.#request.post('/browse', data);
    
    return response;
  }
  
  /**
   * Covers endpoints used to perform direct interactions
   * on YouTube.
   * 
   * @param {string} action
   * @param {object} args
   * @param {string} [args.video_id]
   * @param {string} [args.channel_id]
   * @param {string} [args.comment_id]
   * @param {string} [args.comment_action]
   * 
   * @returns {Response}
   */
  async engage(action, args = {}) {
    if (!this.#session.logged_in && !args.hasOwnProperty('text'))
      throw new Utils.InnertubeError('You are not signed in');
      
    const data = {};
    
    switch (action) {
      case 'like/like':
      case 'like/dislike':
      case 'like/removelike':
        data.target = {};
        data.videoId = args.video_id;
        args.params && (data.params = args.params);
        break;
      case 'subscription/subscribe':
      case 'subscription/unsubscribe':
        data.channelIds = [args.channel_id];
        data.params = action === 'subscription/subscribe' ? 'EgIIAhgA' : 'CgIIAhgA';
        break;
      case 'comment/create_comment':
        data.commentText = args.text;
        data.createCommentParams = Proto.encodeCommentParams(args.video_id);
        break;
      case 'comment/create_comment_reply':
        data.createReplyParams = Proto.encodeCommentReplyParams(args.comment_id, args.video_id);
        data.commentText = args.text;
        break;
      case 'comment/perform_comment_action':
        const target_action = ({
          like: () => Proto.encodeCommentActionParams(5, args),
          dislike: () => Proto.encodeCommentActionParams(4, args),
          translate: () => Proto.encodeCommentActionParams(22, args)
        })[args.comment_action]();
        
        data.actions = [ target_action ];
        break;
      default:
        throw new Utils.InnertubeError('Action not implemented', action);
    }
    
    const response = await this.#request.post(`/${action}`, data);
    return response;
  }
  
  /**
   * Covers endpoints related to account management.
   * 
   * @param {string} action
   * @param {object} args
   * @param {string} [args.new_value]
   * @param {string} [args.setting_item_id]
   * 
   * @returns {Response}
   */
  async account(action, args = {}) {
    if (!this.#session.logged_in) 
      throw new Utils.InnertubeError('You are not signed in');

    const data = { client: args.client };
    
    switch (action) {
      case 'account/set_setting':
        data.newValue = { boolValue: args.new_value };
        data.settingItemId = args.setting_item_id;
        break;
      case 'account/accounts_list':
        break;
      default:
        throw new Utils.InnertubeError('Action not implemented', action);
    }
    
    const response = await this.#request.post(`/${action}`, data);
    return response;
  }
  
  /**
   * Endpoint used for search.
   * 
   * @param {object} args
   * @param {string} [args.query]
   * @param {object} [args.options]
   * @param {string} [args.options.period]
   * @param {string} [args.options.duration]
   * @param {string} [args.options.order]
   * @param {string} [args.client]
   * @param {string} [args.ctoken]
   * 
   * @returns {Response}
   */
  async search(args = {}) {
    const data = {};
    
    args.query &&
      (data.query = args.query);
    
    args.ctoken &&
      (data.continuation = args.ctoken);
    
    args.params &&
      (data.params = args.params);
    
    if (args.filters) {
      args.client == 'YTMUSIC' &&
        (data.params = Proto.encodeMusicSearchFilters(args.filters)) ||
        (data.params = Proto.encodeSearchFilters(args.filters));
    }
    
    args.client &&
      (data.client = args.client);
      
    const response = await this.#request.post('/search', data);
 
    return response;
  }
  
  
  /**
   * Endpoint used fo Shorts' sound search.
   * 
   * @param {object} args
   * @param {string} args.query
   * 
   * @returns {Response}
   */
  async searchSound(args = {}) {
    const data = {
      query: args.query,
      client: 'ANDROID',
    };
    
    const response = await this.#request.post('/sfv/search', data);
    return response;
  }
  
  /**
   * Channel management endpoints.
   * 
   * @param {string} action
   * @param {object} args
   * @param {string} [args.new_name]
   * @param {string} [args.new_description]
   * 
   * @returns {Response}
   */
  async channel(action, args = {}) {
    if (!this.#session.logged_in)
      throw new Utils.InnertubeError('You are not signed in');
      
    const data = { client: args.client || 'ANDROID' };
    
    switch (action) {
      case 'channel/edit_name':
        data.givenName = args.new_name;
        break;
      case 'channel/edit_description':
        data.description = args.new_description;
        break;
      case 'channel/get_profile_editor':
        break;
      default:
        throw new Utils.InnertubeError('Action not implemented', action);
    }
    
    const response = await this.#request.post(`/${action}`, data);
  
    return response;
  }
  
  /**
   * Covers endpoints used for playlist management.
   * 
   * @param {string} action
   * @param {object} args
   * @param {string} [args.title]
   * @param {string} [args.ids]
   * @param {string} [args.playlist_id]
   * @param {string} [args.action]
   * 
   * @returns {Response}
   */
  async playlist(action, args = {}) {
    if (!this.#session.logged_in) 
      throw new Utils.InnertubeError('You are not signed in');
      
    const data = {};
   
    switch (action) {
      case 'playlist/create':
        data.title = args.title;
        data.videoIds = args.ids;
        break;
      case 'playlist/delete':
        data.playlistId = args.playlist_id;
        break;
      case 'browse/edit_playlist':
        data.playlistId = args.playlist_id;
        data.actions = args.ids.map((id) => ({
          'ACTION_ADD_VIDEO': {
            action: args.action, 
            addedVideoId: id      
          },
          'ACTION_REMOVE_VIDEO': {
            action: args.action, 
            setVideoId: id
          }
        })[args.action]);
        break;
      default:
        throw new Utils.InnertubeError('Action not implemented', action);
    }
    
    const response = await this.#request.post(`/${action}`, data);
   
    return response;
  }
  
  /**
   * Covers endpoints used for notifications management.
   * 
   * @param {string} action
   * @param {object} args
   * @param {string} [args.pref]
   * @param {string} [args.channel_id]
   * @param {string} [args.ctoken]
   * 
   * @returns {Response}
   */
  async notifications(action, args = {}) {
    if (!this.#session.logged_in) 
      throw new Utils.InnertubeError('You are not signed in');
    
    const data = {};
   
    switch (action) {
      case 'modify_channel_preference':
        const pref_types = { PERSONALIZED: 1, ALL: 2, NONE: 3 };
        data.params = Proto.encodeNotificationPref(args.channel_id, pref_types[args.pref.toUpperCase()]);
        break;
      case 'get_notification_menu':
        data.notificationsMenuRequestType = 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX';
        args.ctoken && (data.ctoken = args.ctoken);
        break;
      case 'record_interactions':
        data.serializedRecordNotificationInteractionsRequest = args.params;
        break;
      case 'get_unseen_count':
        break;
      default:
        throw new Utils.InnertubeError('Action not implemented', action);
    }
  
    const response = await this.#request.post(`/notification/${action}`, data);
  
    return response;
  }
  
  /**
   * Covers livechat endpoints.
   * 
   * @param {string} action
   * @param {object} args
   * @param {string} [args.text]
   * @param {string} [args.video_id]
   * @param {string} [args.channel_id]
   * @param {string} [args.ctoken]
   * @param {string} [args.params]
   * 
   * @returns {Response}
   */
  async livechat(action, args = {}) {
    const data = {};
    
    switch (action) {
      case 'live_chat/get_live_chat':
        data.continuation = args.ctoken;
        break;
      case 'live_chat/send_message':
        data.params = Proto.encodeMessageParams(args.channel_id, args.video_id);
        data.clientMessageId = Uuid.v4();
        data.richMessage = {
          textSegments: [{ text: args.text }]
        }
        break;
      case 'live_chat/get_item_context_menu':
        // note: this is currently broken due to a recent refactor
        break;
      case 'live_chat/moderate':
        data.params = args.params;
        break;
      case 'updated_metadata':
        data.videoId = args.video_id;
        args.ctoken && (data.continuation = args.ctoken);
        break;
      default:
        throw new Utils.InnertubeError('Action not implemented', action);
    }
  
    const response = await this.#request.post(`/${action}`, data);
  
    return response;
  }
  
  /**
   * Endpoint used to retrieve video thumbnails.
   * 
   * @param {object} args
   * @param {string} args.video_id
   * 
   * @returns {Response}
   */
  async thumbnails(args = {}) {
    const data = {
      client: 'ANDROID',
      videoId: args.video_id
    };
 
    const response = await this.#request.post('/thumbnails', data);

    return response;
  }
  
  /**
   * Place Autocomplete endpoint, found it in the APK but
   * doesn't seem to be used anywhere on YouTube (maybe for ads?).
   * 
   * Ex:
   * ```js
   * const places = await session.actions.geo('place_autocomplete', { input: 'San diego cafe' });
   * console.info(places.data);
   * ```
   * 
   * @param {string} action
   * @param {object} args
   * @param {string} args.input
   * 
   * @returns {Response}
   */
  async geo(action, args = {}) {
    if (!this.#session.logged_in)
      throw new Utils.InnertubeError('You are not signed in');
      
    const data = {
      input: args.input,
      client: 'ANDROID'
    };
    
    const response = await this.#request.post(`/geo/${action}`, data);

    return response;
  }
  
  /**
   * Covers endpoints used to report content.
   * 
   * @param {string} action
   * @param {object} args
   * @param {object} [args.action]
   * @param {string} [args.params]
   * 
   * @returns {Response}
   */
  async flag(action, args) {
    if (!this.#session.logged_in)
      throw new Utils.InnertubeError('You are not signed in');
      
    const data = {};
    
    switch (action) {
      case 'flag/flag':
        data.action = args.action;
        break;
      case 'flag/get_form':
        data.params = args.params;
        break;
      default:
        throw new Utils.InnertubeError('Action not implemented', action);
    }
    
    const response = await this.#request.post(`/${action}`, data);
  
    return response;
  }
  
  /**
   * Covers specific YouTube Music endpoints.
   * 
   * @param {string} action
   * @param {string} args.input
   * 
   * @returns {Response}
   */
  async music(action, args) {
    const data = {
      input: args.input || '',
      client: 'YTMUSIC'
    };
    
    const response = await this.#request.post(`/music/${action}`, data);
  
    return response;
  }
  
  /**
   * Mostly used for pagination and specific operations.
   * 
   * @param {object} args
   * @param {string} [args.video_id]
   * @param {string} [args.ctoken]
   * @param {string} [args.client]
   * 
   * @returns {Response}
   */
  async next(args = {}) {
    const data = {};
    
    args.ctoken &&
      (data.continuation = args.ctoken);
      
    args.video_id &&
      (data.videoId = args.video_id);
      
    args.client &&
      (data.client = args.client);
    
    const response = await this.#request.post('/next', data);
  
    return response;
  }
  
  /**
   * Used to retrieve video info.
   * 
   * @param {string} id
   * @param {string} [cpn]
   *
   * @returns {Response}
   */
  async getVideoInfo(id, cpn, client) {
    const data = {
      playbackContext: {
        contentPlaybackContext: {
          vis: 0,
          splay: false,
          referer: 'https://www.youtube.com',
          currentUrl: '/watch?v=' + id,
          autonavState: 'STATE_OFF',
          signatureTimestamp: this.#session.sts,
          autoCaptionsDefaultOn: false,
          html5Preference: 'HTML5_PREF_WANTS',
          lactMilliseconds: '-1'
        }
      },
      attestationRequest: {
        omitBotguardData: true
      },
      videoId: id
    };
    
    client && (data.client = client);
    
    cpn && (data.cpn = cpn);
    
    const response = await this.#request.post('/player', data);
  
    return response.data;
  }
  
  /**
   * Covers search suggestion endpoints.
   * 
   * @param {string} client
   * @param {string} input
   * 
   * @returns {Response}
   */
  async getSearchSuggestions(client, query) {
    if (!['YOUTUBE', 'YTMUSIC'].includes(client))
      throw new Utils.InnertubeError('Invalid client', client);
    
    const response = await ({
      YOUTUBE: () => this.#request({ 
        url: 'search',
        baseURL: Constants.URLS.YT_SUGGESTIONS, 
        params: {
          q: query,
          ds: 'yt',
          client: 'youtube',
          xssi: 't',
          oe: 'UTF',
          gl: this.#session.context.client.gl,
          hl: this.#session.context.client.hl
        }
      }),
      YTMUSIC: () => this.music('get_search_suggestions', { input: query })
    }[client])();
    
    return response;
  }
  
  /**
   * Endpoint used to retrieve user mention suggestions.
   * 
   * @param {object} args
   * @param {string} args.input
   * 
   * @returns {Response}
   */
  async getUserMentionSuggestions(args = {}) {
    if (!this.#session.logged_in)
      throw new Utils.InnertubeError('You are not signed in');
      
    const data = {
      input: args.input,
      client: 'ANDROID'
    };
    
    const response = await this.#request.post('get_user_mention_suggestions', data);
    
    return response;
  }
  
  #needsLogin(id) {
    return [
      'FElibrary', 'FEhistory', 'FEsubscriptions',
      'SPaccount_notifications',  'SPaccount_privacy',
      'SPtime_watched'
    ].includes(id);
  }
}

module.exports = Actions;