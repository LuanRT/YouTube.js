'use strict';

const Uuid = require('uuid');
const Axios = require('axios');
const Proto = require('./proto');
const Constants = require('./Constants');

/**
 * Performs direct interactions on YouTube.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {string} engagement_type - Type of engagement.
 * @param {object} args - Engagement arguments.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function engage(session, engagement_type, args = {}) {
  if (!session.logged_in) throw new Error('You are not signed-in');

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
        like: () => Proto.encodeCommentActionParams(5, args.comment_id, args.video_id, args.channel_id),
        dislike: () => Proto.encodeCommentActionParams(4, args.comment_id, args.video_id, args.channel_id),
      })[args.comment_action]();
      data.actions = [ action ];
      break;
    default:
  }
  
  const response = await session.YTRequester.post(`/${engagement_type}`, JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };

  return {
    success: true,
    status_code: response.status
  };
}

/**
 * Accesses YouTube's various sections.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {string} action_type - Type of action.
 * @param {object} args - Action argumenets.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function browse(session, action_type, args = {}) {
  if (!session.logged_in && action_type != 'home_feed' 
    && action_type !== 'lyrics' && action_type !== 'music_playlist'
    && action_type !== 'playlist') 
      throw new Error('You are not signed-in');

  const data = { context: session.context };
  switch (action_type) {
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
    case 'subscriptions_feed':
      data.browseId = 'FEsubscriptions';
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
    case 'channel':
    case 'playlist':
      data.browseId = args.browse_id;
      break;
    default:
  }
  
  const requester = args.ytmusic && session.YTMRequester || session.YTRequester;
  const response = await requester.post('/browse', JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}


/**
 * Account settings endpoints.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {string} action_type - Type of action.
 * @param {object} args - Action argumenets.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function account(session, action_type, args = {}) {
  if (!session.logged_in) throw new Error('You are not signed-in');

  const data = {};
  switch (action_type) {
    case 'account/account_menu':
      data.context = session.context;
      break;
    case 'account/set_setting':
      data.context = session.context;
      data.newValue = { boolValue: args.new_value };
      data.settingItemId = arts.setting_item_id;
      break;
    default:
  }
  
  const response = await session.YTRequester.post(`/${action_type}`, JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Accesses YouTube Music endpoints (/youtubei/v1/music/).
 * 
 * @param {Innertube} session - A valid Innertube session.
 * @param {string} action_type - Type of action.
 * @param {object} args - Action arguments.
 * @todo Implement more actions.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function music(session, action_type, args) {
  const context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

  context.client.originalUrl = Constants.URLS.YT_MUSIC;
  context.client.clientVersion = Constants.YTMUSIC_VERSION;
  context.client.clientName = 'WEB_REMIX';

  let data;

  switch (action_type) {
    case 'get_search_suggestions':
      data.context = context;
      data.input = args.input || '';
      break;
    default:
      break;
  }
  
  const response = await session.YTMRequester.post(`/music/${action_type}`, JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Searches a given query on YouTube/YTMusic.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {string} client - YouTube client: YOUTUBE | YTMUSIC
 * @param {object} args - Search arguments.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function search(session, client, args = {}) {
  if (!args.query) throw new Error('No query was provided');

  const data = { context: session.context };
  switch (client) {
    case 'YOUTUBE':
      data.params = Proto.encodeSearchFilter(args.options.period, args.options.duration, args.options.order);
      data.query = args.query;
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
      break;
  }
  
  const requester = client == 'YOUTUBE' && session.YTRequester || session.YTMRequester;
  const response = await requester.post('/search', JSON.stringify(data)).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Interacts with YouTube's notification system.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {string} action_type - Type of action.
 * @param {object} args - Action arguments.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function notifications(session, action_type, args = {}) {
  if (!session.logged_in) throw new Error('You are not signed-in');

  const data = {};
  switch (action_type) {
    case 'modify_channel_preference':
      const pref_types = { PERSONALIZED: 1, ALL: 2, NONE: 3 };
      data.context = session.context;
      data.params = Proto.encodeNotificationPref(args.channel_id, pref_types[args.pref.toUpperCase()]);
      break;
    case 'get_notification_menu':
      data.context = session.context;
      data.notificationsMenuRequestType = 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX';
      break;
    case 'get_unseen_count':
      data.context = session.context;
      break;
    default:
  }
  
  const response = await session.YTRequester.post(`/notification/${action_type}`, JSON.stringify(data)).catch((err) => err);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };
  if (action_type === 'modify_channel_preference') return { success: true, status_code: response.status };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Interacts with YouTube's livechat system.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {string} action_type - Type of action.
 * @param {object} args - Action arguments.
 * @returns {Promise.<{ success: boolean; data: object; message?: string }>}
 */
async function livechat(session, action_type, args = {}) {
  const data = {};
  switch (action_type) {
    case 'live_chat/get_live_chat':
      data.context = session.context;
      data.continuation = args.ctoken;
      break;
    case 'live_chat/send_message':
      data.context = session.context;
      data.params = Proto.encodeMessageParams(args.channel_id, args.video_id);
      data.clientMessageId = `ytjs-${Uuid.v4()}`;
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
  }
  
  const response = await session.YTRequester.post(`/${action_type}`, JSON.stringify(data)).catch((err) => err);
  if (response instanceof Error) return { success: false, message: response.message };
  
  return { success: true, data: response.data };
}

/**
 * Requests continuation for previously performed actions.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {object} args - Continuation arguments.
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
  
  const requester = args.ytmusic && session.YTMRequester || session.YTRequester;
  const response = await requester.post('/next', JSON.stringify(data)).catch((error) => error);
 
  if (response instanceof Error) return {
    success: false, 
    status_code: response.response.status,
    message: response.message 
  };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Retrieves video data.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {object} args - Request arguments.
 * @returns {Promise.<object>} - Video data.
 */
async function getVideoInfo(session, args = {}) {
  const response = await session.YTRequester.post(`/player`, JSON.stringify(Constants.VIDEO_INFO_REQBODY(args.id, session.sts, session.context))).catch((err) => err);
  if (response instanceof Error) throw new Error(`Could not get video info: ${response.message}`);
  return response.data;
}

/**
 * Gets search suggestions.
 * 
 * @param {Innertube} session - A valid innertube session
 * @param {string} query - Search query
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function getYTSearchSuggestions(session, query) {
  const response = await Axios.get(`${Constants.URLS.YT_SUGGESTIONS}search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`,
   Constants.DEFAULT_HEADERS(session)).catch((error) => error);
   
  if (response instanceof Error) return {
    success: false, 
    status_code: response.status,
    message: response.message
  };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

module.exports = { engage, browse, account, music, search, notifications, livechat, getVideoInfo, next, getYTSearchSuggestions };
