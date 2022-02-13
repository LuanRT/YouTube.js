'use strict';

const Uuid = require('uuid');
const Axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');

/**
 * Performs direct interactions on YouTube.
 *
 * @param {object} session A valid Innertube session.
 * @param {string} engagement_type Type of engagement.
 * @param {object} args Engagement arguments.
 * @returns {object} { success: boolean, status_code: number } | { success: boolean, status_code: number, message: string }
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
        channelIds: [args.channel_id]
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
 * @param {object} session A valid Innertube session.
 * @param {string} action_type Type of action.
 * @returns {object} { success: boolean, status_code: number, data: object } | { success: boolean, status_code: number, message: string } 
 */
async function browse(session, action_type, args = {}) {
  if (!session.logged_in && action_type != 'lyrics') throw new Error('You are not signed-in');

  let data;
  switch (action_type) { // TODO: Handle more actions
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
      const yt_music_context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

      yt_music_context.client.originalUrl = Constants.URLS.YT_MUSIC_URL;
      yt_music_context.client.clientVersion = '1.20211213.00.00';
      yt_music_context.client.clientName = 'WEB_REMIX';

      data = {
        context: yt_music_context,
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
 * Performs searches on YouTube.
 *
 * @param {object} session A valid Innertube session.
 * @param {string} client YouTube client: YOUTUBE | YTMUSIC
 * @param {object} args Search arguments.
 * @returns {object} { success: boolean, status_code: number, data: object } | { success: boolean, status_code: number, message: string } 
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
      const yt_music_context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

      yt_music_context.client.originalUrl = Constants.URLS.YT_MUSIC_URL;
      yt_music_context.client.clientVersion = '1.20211213.00.00';
      yt_music_context.client.clientName = 'WEB_REMIX';

      data = {
        context: yt_music_context,
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
 * @param {object} session A valid Innertube session.
 * @param {string} action_type Type of action.
 * @param {object} args Action arguments.
 * @returns {object} { success: boolean, status_code: number, data: object } | { success: boolean, status_code: number, message: string } 
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
 * @param {object} session A valid Innertube session.
 * @param {string} action_type Type of action.
 * @param {object} args Action arguments.
 * @returns {object} { success: boolean, status_code: number, data: object } | { success: boolean, status_code: number, message: string } 
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
 * Gets detailed data for a video.
 *
 * @param {object} session A valid Innertube session.
 * @param {object} args Request arguments.
 * @returns {object} Video data.
 */
async function getVideoInfo(session, args = {}) {
  let response;

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
 * @param {object} session A valid Innertube session.
 * @param {object} args Continuation arguments.
 * @returns {object} { success: boolean, status_code: number, data: object } | { success: boolean, status_code: number, message: string } 
 */
async function getContinuation(session, args = {}) {
  let data = { context: session.context };
  args.continuation_token && (data.continuation = args.continuation_token);

  if (args.video_id) {
    data.videoId = args.video_id;
    if (args.ytmusic) {
      const yt_music_context = JSON.parse(JSON.stringify(session.context)); // deep copy the context obj so we don't accidentally change it

      yt_music_context.client.originalUrl = Constants.URLS.YT_MUSIC_URL;
      yt_music_context.client.clientVersion = '1.20211213.00.00';
      yt_music_context.client.clientName = 'WEB_REMIX';

      data.context = yt_music_context;
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

module.exports = { engage, browse, search, notifications, livechat, getVideoInfo, getContinuation };