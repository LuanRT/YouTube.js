'use strict';

const Uuid = require('uuid');
const Axios = require('axios');
const Utils = require('./Utils');
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

  let data;

  switch (engagement_type) {
    case 'like/like':
    case 'like/dislike':
    case 'like/removelike':
      data = {
        context: session.context,
        target: {
          videoId: args.video_id
        }
      };
      break;
    case 'subscription/subscribe':
    case 'subscription/unsubscribe':
      data = {
        context: session.context,
        channelIds: [args.channel_id],
        params: engagement_type == 'subscription/subscribe' ? 'EgIIAhgA' : 'CgIIAhgA'
      };
      break;
    case 'comment/create_comment':
      data = {
        context: session.context,
        commentText: args.text,
        createCommentParams: Utils.encodeCommentParams(args.video_id)
      };
      break;
    default:
  }

  const response = await Axios.post(`${Constants.URLS.YT_BASE_URL}/youtubei/v1/${engagement_type}${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`,
    JSON.stringify(data), Constants.INNERTUBE_REQOPTS({ session, id: args.video_id, data })).catch((error) => error);

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
  if (!session.logged_in && (action_type != 'lyrics' || action_type != 'music_playlist'))
    throw new Error('You are not signed-in');

  let data;

  switch (action_type) {
    case 'account_notifications':
      data = {
        context: session.context,
        browseId: 'SPaccount_notifications'
      };
      break;
    case 'account_privacy':
      data = {
        context: session.context,
        browseId: 'SPaccount_privacy'
      };
      break;
    case 'history':
      data = {
        context: session.context,
        browseId: 'FEhistory'
      }
      break;
    case 'home_feed':
      data = {
        context: session.context,
        browseId: 'FEwhat_to_watch'
      };
      break;
    case 'subscriptions_feed':
      data = {
        context: session.context,
        browseId: 'FEsubscriptions'
      };
      break;
    case 'lyrics':
    case 'music_playlist':
      const context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

      context.client.originalUrl = Constants.URLS.YT_MUSIC_URL;
      context.client.clientVersion = Constants.YTMUSIC_VERSION;
      context.client.clientName = 'WEB_REMIX';

      data = {
        context,
        browseId: args.browse_id
      }
      break;
    case 'playlist':
      data = {
        context: session.context,
        browseId: args.browse_id
      }
      break;
    default:
  }

  const client_domain = args.ytmusic && Constants.URLS.YT_MUSIC_URL || Constants.URLS.YT_BASE_URL;
  const response = await Axios.post(`${client_domain}/youtubei/v1/browse${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`,
    JSON.stringify(data), Constants.INNERTUBE_REQOPTS({ session, ytmusic: args.ytmusic })).catch((error) => error);

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

  let data;

  switch (action_type) {
    case 'account/account_menu':
      data = { context: session.context };
      break;
    case 'account/set_setting':
      data = {
        context: session.context,
        newValue: {
          boolValue: args.new_value
        },
        settingItemId: args.setting_item_id
      }
      break;
    default:
      break;
  }

  const response = await Axios.post(`${Constants.URLS.YT_BASE_URL}/youtubei/v1/${action_type}${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`,
    JSON.stringify(data), Constants.INNERTUBE_REQOPTS({ session })).catch((error) => error);

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

  context.client.originalUrl = Constants.URLS.YT_MUSIC_URL;
  context.client.clientVersion = Constants.YTMUSIC_VERSION;
  context.client.clientName = 'WEB_REMIX';

  let data;

  switch (action_type) {
    case 'get_search_suggestions':
      data = {
        context,
        input: args.input || ''
      };
      break;
    default:
      break;
  }

  const response = await Axios.post(`${Constants.URLS.YT_MUSIC_URL}/youtubei/v1/music/${action_type}${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`,
    JSON.stringify(data), Constants.INNERTUBE_REQOPTS({ session, ytmusic: true })).catch((error) => error);

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

  let data;

  switch (client) {
    case 'YOUTUBE':
      data = {
        context: session.context,
        params: Utils.encodeFilter(args.options.period, args.options.duration, args.options.order),
        query: args.query
      };
      break;
    case 'YTMUSIC':
      const context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

      context.client.originalUrl = Constants.URLS.YT_MUSIC_URL;
      context.client.clientVersion = Constants.YTMUSIC_VERSION;
      context.client.clientName = 'WEB_REMIX';

      data = {
        context: context,
        query: args.query
      };
      break;
    default:
      break;
  }

  const response = await Axios.post(`${client === 'YOUTUBE' && Constants.URLS.YT_BASE_URL || Constants.URLS.YT_MUSIC_URL}/youtubei/v1/search${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`,
    JSON.stringify(data), Constants.INNERTUBE_REQOPTS({ session, ytmusic: client === 'YTMUSIC' })).catch((error) => error);

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

  let data;

  switch (action_type) {
    case 'modify_channel_preference':
      let pref_types = { PERSONALIZED: 1, ALL: 2, NONE: 3 };
      data = {
        context: session.context,
        params: Utils.encodeNotificationPref(args.channel_id, pref_types[args.pref.toUpperCase()])
      };
      break;
    case 'get_notification_menu':
      data = {
        context: session.context,
        notificationsMenuRequestType: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX'
      };
      break;
    case 'get_unseen_count':
      data = {
        context: session.context
      };
      break;
    default:
  }

  const response = await Axios.post(`${Constants.URLS.YT_BASE_URL}/youtubei/v1/notification/${action_type}${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`,
    JSON.stringify(data), Constants.INNERTUBE_REQOPTS({ session })).catch((error) => error);

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
  let data;

  switch (action_type) {
    case 'live_chat/get_live_chat':
      data = {
        context: session.context,
        continuation: args.ctoken
      };
      break;
    case 'live_chat/send_message':
      data = {
        context: session.context,
        params: Utils.encodeMessageParams(args.channel_id, args.video_id),
        clientMessageId: `ytjs-${Uuid.v4()}`,
        richMessage: {
          textSegments: [{ text: args.text }]
        }
      };
      break;
    case 'live_chat/get_item_context_menu':
      data = {
        context: session.context
      };
      break;
    case 'live_chat/moderate':
      data = {
        context: session.context,
        params: args.cmd_params
      };
      break;
    case 'updated_metadata':
      data = {
        context: session.context,
        videoId: args.video_id
      };
      args.continuation && (data.continuation = args.continuation);
      break;
    default:
  }

  const response = await Axios.post(`${Constants.URLS.YT_BASE_URL}/youtubei/v1/${action_type}${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`,
    JSON.stringify(data), Constants.INNERTUBE_REQOPTS({ session, params: args.params })).catch((error) => error);

  if (response instanceof Error) return { success: false, message: response.message };

  return { success: true, data: response.data };
}

/**
 * Retrieves video data.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {object} args - Request arguments.
 * @returns {Promise.<object>} - Video data.
 */
async function getVideoInfo(session, args = {}) {
  let response;
  
  /**
   * Note regarding the weird logic here: 
   * 
   * The mobile website still uses an old endpoint to get some video data, decided to use it here
   * since making a continuation request (to /next) would cause slowness. However, I am pretty sure
   * this endpoint is going to die soon so I think I'll have to implement the continuation req anyway.
   */
  !args.desktop &&
    (response = await Axios.get(`${Constants.URLS.YT_WATCH_PAGE}?v=${args.id}&t=8s&pbj=1`, Constants.INNERTUBE_REQOPTS({ session, id: args.id, desktop: false })).catch((error) => error)) ||
    (response = await Axios.post(`${Constants.URLS.YT_BASE_URL}/youtubei/v1/player${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`,
      JSON.stringify(Constants.VIDEO_INFO_REQBODY(args.id, session.sts, session.context)), Constants.INNERTUBE_REQOPTS({ session, id: args.id, desktop: true })).catch((error) => error));

  if (response instanceof Error) throw new Error(`Could not get video info: ${response.message}`);

  return response.data;
}

/**
 * Requests continuation for previously performed actions.
 *
 * @param {Innertube} session - A valid Innertube session.
 * @param {object} args - Continuation arguments.
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>} 
 */
async function getContinuation(session, args = {}) {
  let data = { context: session.context };
  args.continuation_token && (data.continuation = args.continuation_token);

  if (args.video_id) {
    data.videoId = args.video_id;
    if (args.ytmusic) {
      const context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

      context.client.originalUrl = Constants.URLS.YT_MUSIC_URL;
      context.client.clientVersion = Constants.YTMUSIC_VERSION;
      context.client.clientName = 'WEB_REMIX';

      data.context = context;
      data.isAudioOnly = true;
      data.tunerSettingValue = 'AUTOMIX_SETTING_NORMAL';
    } else {
      data.racyCheckOk = true;
      data.contentCheckOk = false;
      data.autonavState = 'STATE_NONE';
      data.playbackContext = {
        vis: 0,
        lactMilliseconds: '-1'
      }
      data.captionsRequested = false;
    }
  }

  const client_domain = args.ytmusic && Constants.URLS.YT_MUSIC_URL || Constants.URLS.YT_BASE_URL;
  const response = await Axios.post(`${client_domain}/youtubei/v1/next${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`,
    JSON.stringify(data), Constants.INNERTUBE_REQOPTS({ session, ytmusic: args.ytmusic })).catch((error) => error);

  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

/**
 * Gets search suggestions.
 * 
 * @param {Innertube} session - A valid innertube session
 * @param {string} query - Search query
 * @returns {Promise.<{ success: boolean; status_code: number; data: object; message?: string }>}
 */
async function getYTSearchSuggestions(session, query) {
  const response = await Axios.get(`${Constants.URLS.YT_SUGGESTIONS}search?client=firefox&ds=yt&q=${query}`,
   Constants.DEFAULT_HEADERS(session)).catch((error) => error);

  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };

  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

module.exports = { engage, browse, account, music, search, notifications, livechat, getVideoInfo, getContinuation, getYTSearchSuggestions };
