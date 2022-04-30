'use strict';

const Uuid = require('uuid');
const Axios = require('axios');
const Proto = require('../proto');
const Utils = require('../utils/Utils');
const Constants = require('../utils/Constants');

/**
 * Performs direct interactions on YouTube.
 *
 * @param {Innertube} session 
 * @param {string} engagement_type
 * @param {object} args
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function engage(session, engagement_type, args = {}) {
  if (!session.logged_in) throw new Utils.InnertubeError('You are not signed in');

  const data = { context: session.context };
  switch (engagement_type) {
    case 'like/like':
    case 'like/dislike':
    case 'like/removelike':
      data.target = {
        videoId: args.video_id
      }
      break;
    case 'subscription/subscribe':
    case 'subscription/unsubscribe':
      data.channelIds = [args.channel_id];
      data.params = engagement_type == 'subscription/subscribe' ? 'EgIIAhgA' : 'CgIIAhgA';
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
      const action = ({
        like: () => Proto.encodeCommentActionParams(5, args.comment_id, args.video_id),
        dislike: () => Proto.encodeCommentActionParams(4, args.comment_id, args.video_id),
      })[args.comment_action]();
      data.actions = [ action ];
      break;
    default:
      throw new Utils.InnertubeError('Invalid action', engagement_type);
  }
  
  const response = await session.request.post(`/${engagement_type}`, JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response?.status || 0, message: response.message };

  return {
    success: true,
    status_code: response.status
  };
}

/**
 * Accesses YouTube's various sections.
 *
 * @param {Innertube} session 
 * @param {string} action 
 * @param {object} args 
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function browse(session, action, args = {}) {
  if (!session.logged_in && [ 'account_notifications', 'account_privacy', 'history', 
    'library', 'subscriptions_feed' ].includes(action))
      throw new Utils.InnertubeError('You are not signed in');

  const data = { context: session.context };
  switch (action) {
    case 'account_notifications':
      data.browseId = 'SPaccount_notifications';
      break;
    case 'account_privacy':
      data.browseId = 'SPaccount_privacy';
      break;
    case 'history':
      data.browseId = 'FEhistory';
      break;
    case 'home_feed':
      data.browseId = 'FEwhat_to_watch';
      break;
    case 'library':
      data.browseId = 'FElibrary';
      break;
    case 'trending':
      data.browseId = 'FEtrending';
      args.params && (data.params = args.params);
      break;
    case 'subscriptions_feed':
      data.browseId = 'FEsubscriptions';
      break;
    case 'navigation':
      args.params && (data.params = args.params);
    case 'channel':
    case 'playlist':
      data.browseId = args.browse_id;
      break;
    case 'lyrics':
    case 'music_playlist':
      const context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

      context.client.originalUrl = Constants.URLS.YT_MUSIC;
      context.client.clientVersion = Constants.YTMUSIC_VERSION;
      context.client.clientName = 'WEB_REMIX';
      
      data.context = context;
      data.browseId = args.browse_id;
      break;
    case 'continuation':
      data.continuation = args.ctoken;
      break;
    default:
      throw new Utils.InnertubeError('Invalid action', action);
  }
  
  const response = await session.request.post('/browse', JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response?.status || 0, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Endpoints used to report content.
 *
 * @param {Innertube} session 
 * @param {string} action 
 * @param {object} args 
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function flag(session, action, args = {}) {
  if (!session.logged_in) throw new Utils.InnertubeError('You are not signed in');
  const data = { context: session.context };
 
  switch (action) {
    case 'flag/flag':
      data.action = args.action;
      break;
    case 'flag/get_form':
      data.params = args.params;
      break;
    default:
      throw new Utils.InnertubeError('Invalid action', action);
  }
  
  const response = await session.request.post(`/${action}`, JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response?.status || 0, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

async function playlist(session, action, args = {}) {
  const data = { context: session.context };
  
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
      throw new Utils.InnertubeError('Invalid action', action);
  }
  
  const response = await session.request.post(`/${action}`, JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response?.status || 0, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Account settings endpoints.
 *
 * @param {Innertube} session 
 * @param {string} action 
 * @param {object} args 
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function account(session, action, args = {}) {
  if (!session.logged_in) throw new Utils.InnertubeError('You are not signed in');

  const data = {};
  switch (action) {
    case 'account/account_menu':
      data.context = session.context;
      break;
    case 'account/set_setting':
      data.context = session.context;
      data.newValue = { boolValue: args.new_value };
      data.settingItemId = args.setting_item_id;
      break;
    default:
      throw new Utils.InnertubeError('Invalid action', action);
  }
  
  const response = await session.request.post(`/${action}`, JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response?.status || 0, message: response.message };
 
  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Accesses YouTube Music endpoints (/youtubei/v1/music/).
 * 
 * @param {Innertube} session 
 * @param {string} action 
 * @param {object} args 
 * @todo Implement more endpoints.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function music(session, action, args) {
  const context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

  context.client.originalUrl = Constants.URLS.YT_MUSIC;
  context.client.clientVersion = Constants.YTMUSIC_VERSION;
  context.client.clientName = 'WEB_REMIX';

  let data = {};
  switch (action) {
    case 'get_search_suggestions':
      data.context = context;
      data.input = args.input || '';
      break;
    default:
      throw new Utils.InnertubeError('Invalid action', action);
  }
  
  const response = await session.request.post(`/music/${action}`, JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response?.status || 0, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Searches a given query on YouTube/YTMusic.
 *
 * @param {Innertube} session 
 * @param {string} client - YouTube client: YOUTUBE | YTMUSIC
 * @param {object} args - Search arguments.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function search(session, client, args = {}) {
  const data = { context: session.context };
  switch (client) {
    case 'YOUTUBE':
      if (args.query) {
        data.params = args.options.hasOwnProperty('params') ? args.options.params : Proto.encodeSearchFilter(args.options.period, args.options.duration, args.options.order);
        data.query = args.query;
      } else {
        data.continuation = args.ctoken;
      }
      break;
    case 'YTMUSIC':
      const context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

      context.client.originalUrl = Constants.URLS.YT_MUSIC;
      context.client.clientVersion = Constants.YTMUSIC_VERSION;
      context.client.clientName = 'WEB_REMIX';
      
      data.context = context;
      data.query = args.query;
      break;
    default:
      throw new Utils.InnertubeError('Invalid client', client);
  }
  
  const response = await session.request.post('/search', JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response?.status || 0, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Interacts with YouTube's notification system.
 *
 * @param {Innertube} session 
 * @param {string} action 
 * @param {object} args
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function notifications(session, action, args = {}) {
  if (!session.logged_in) throw new Utils.InnertubeError('You are not signed in');

  const data = {};
  switch (action) {
    case 'modify_channel_preference':
      const pref_types = { PERSONALIZED: 1, ALL: 2, NONE: 3 };
      data.context = session.context;
      data.params = Proto.encodeNotificationPref(args.channel_id, pref_types[args.pref.toUpperCase()]);
      break;
    case 'get_notification_menu':
      data.context = session.context;
      data.notificationsMenuRequestType = 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX';
      args.ctoken && (data.ctoken = args.ctoken);
      break;
    case 'get_unseen_count':
      data.context = session.context;
      break;
    default:
      throw new Utils.InnertubeError('Invalid action', action);
  }
  
  const response = await session.request.post(`/notification/${action}`, JSON.stringify(data)).catch((err) => err);
  if (response instanceof Error) return { success: false, status_code: response.response?.status || 0, message: response.message };
  if (action === 'modify_channel_preference') return { success: true, status_code: response.status };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Interacts with YouTube's livechat system.
 *
 * @param {Innertube} session 
 * @param {string} action 
 * @param {object} args
 * @returns {Promise.<{ success: boolean; data: object; message?: string }>}
 */
async function livechat(session, action, args = {}) {
  const data = {};
  switch (action) {
    case 'live_chat/get_live_chat':
      data.context = session.context;
      data.continuation = args.ctoken;
      break;
    case 'live_chat/send_message':
      data.context = session.context;
      data.params = Proto.encodeMessageParams(args.channel_id, args.video_id);
      data.clientMessageId = Uuid.v4();
      data.richMessage = {
        textSegments: [{ text: args.text }]
      }
      break;
    case 'live_chat/get_item_context_menu':
      data.context = session.context;
      break;
    case 'live_chat/moderate':
      data.context = session.context;
      data.params = args.cmd_params;
      break;
    case 'updated_metadata':
      data.context = session.context;
      data.videoId = args.video_id;
      args.continuation && (data.continuation = args.continuation);
      break;
    default:
      throw new Utils.InnertubeError('Invalid action', action);
  }
  
  const response = await session.request.post(`/${action}`, JSON.stringify(data)).catch((err) => err);
  if (response instanceof Error) return { success: false, message: response.message };
  
  return { success: true, data: response.data };
}

/**
 * Requests continuation for previously performed actions.
 *
 * @param {Innertube} session 
 * @param {object} args
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>} 
 */
async function next(session, args = {}) {
  let data = { context: session.context };
  args.continuation_token && (data.continuation = args.continuation_token);

  if (args.video_id) {
    data.videoId = args.video_id;
    if (args.ytmusic) {
      const context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

      context.client.originalUrl = Constants.URLS.YT_MUSIC;
      context.client.clientVersion = Constants.YTMUSIC_VERSION;
      context.client.clientName = 'WEB_REMIX';

      data.context = context;
      data.isAudioOnly = true;
      data.tunerSettingValue = 'AUTOMIX_SETTING_NORMAL';
    } else {
      data.racyCheckOk = true;
      data.contentCheckOk = false;
      data.autonavState = 'STATE_NONE';
      data.playbackContext = { vis: 0, lactMilliseconds: '-1' };
      data.captionsRequested = false;
    }
  }
  
  const response = await session.request.post('/next', JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response?.status || 0, message: response.message  };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Retrieves video data.
 *
 * @param {Innertube} session 
 * @param {object} args
 * @returns {Promise.<object>} - Video data.
 */
async function getVideoInfo(session, args = {}) {
  const response = await session.request.post(`/player`, JSON.stringify(Constants.VIDEO_INFO_REQBODY(args.id, session.sts, session.context))).catch((err) => err);
  if (response instanceof Error) throw new Utils.InnertubeError(`Could not get video info: ${response.message}`);
  return response.data;
}

/**
 * Gets search suggestions.
 * 
 * @param {Innertube} session
 * @param {string} query
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function getSearchSuggestions(session, client, input) {
  if (!['YOUTUBE', 'YTMUSIC'].includes(client))
    throw new Utils.InnertubeError('Invalid client', client);
  
  const response = await ({
    'YOUTUBE': async () => {
      const response = await Axios.get(`${Constants.URLS.YT_SUGGESTIONS}search?client=firefox&ds=yt&q=${encodeURIComponent(input)}`,
      Constants.DEFAULT_HEADERS(session.config)).catch((error) => error);
      
      return {
        success: !(response instanceof Error),
        status_code: response.status,
        data: response?.data
      };
    },
    'YTMUSIC': async () => {
      const response = await music(session, 'get_search_suggestions', { input });
      return response;
    }
  }[client])();
  
  return response;
}

module.exports = { engage, browse, account, playlist, flag, music, search, notifications, livechat, getVideoInfo, next, getSearchSuggestions };