'use strict';

const Uuid = require('uuid');
const Axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');

async function engage(session, engagement_type, args = {}) {
  if (!session.logged_in) throw new Error('You are not logged in');
  let data = {};
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
        createCommentParams: Utils.generateCommentParams(args.video_id)
      };
      break;
    default:
  }

  const response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/${engagement_type}${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session, id: args.video_id, data })).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };
  return {
    success: true,
    status_code: response.status
  };
}

async function browse(session, action_type) {
  if (!session.logged_in) throw new Error('You are not logged in');
  let data;
  switch (action_type) {
    case 'subscriptions_feed':
      data = {
        context: session.context,
        browseId: 'FEsubscriptions'
      };
      break;
    default:
  }
  
  const response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/browse${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session })).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };
  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

async function notifications(session, action_type, args = {}) {
  if (!session.logged_in) throw new Error('You are not logged in');
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

  const response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/notification/${action_type}${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session })).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };
  if (action_type === 'modify_channel_preference') return { success: true, status_code: response.status };
  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

async function livechat(session, action_type, args = {}) {
  let data;
  switch (action_type) {
    case 'live_chat/send_message': 
      data = {
        context: session.context,
        params: Utils.generateMessageParams(args.channel_id, args.video_id),
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
    default:
  }
  
  const response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/${action_type}${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session, params: args.params })).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };
  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

async function getContinuation(session, info = {}) {
  let data = { context: session.context };
  info.continuation_token && (data.continuation = info.continuation_token);

  if (info.video_id) {
    data.videoId = info.video_id;
    data.racyCheckOk = true;
    data.contentCheckOk = false;
    data.autonavState = 'STATE_NONE';
    data.playbackContext = {
      vis: 0,
      lactMilliseconds: '-1'
    };
    data.captionsRequested = false;
  }

  const response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/next${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session })).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };
  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

module.exports = { engage, browse, notifications, livechat, getContinuation };