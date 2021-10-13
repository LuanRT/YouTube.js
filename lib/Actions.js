'use strict';

const Axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');

async function engage(session, engagement_type, args = {}) {
  if (!session.logged_in) throw new Error('You must be signed-in to interact with a video/channel');
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
        createCommentParams: Utils.encodeVideoId(args.video_id)
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

async function notifications(session, action_type, args = {}) {
  if (!session.logged_in) throw new Error('You must be logged in to fetch notifications');
  let data;
  switch (action_type) {
    case 'modify_channel_preference':
      let pref_types = { ALL: 0, NONE: 1, PERSONALIZED: 2 };
      data = {
        context: session.context,
        params: Utils.encodeChannelId(args.channel_id, pref_types[args.pref.toUpperCase()])
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

  const response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/notification/${action_type}${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session, data, desktop: true })).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };
  if (action_type === 'modify_channel_preference') return { success: true, status_code: response.status };
  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

async function getContinuation(session, continuation_token) {
  let data = { context: session.context };
  const response = await Axios.post(`${Constants.urls.YT_BASE_URL}/youtubei/v1/next/${session.logged_in && session.cookie.length < 1 ? '' : `?key=${session.key}`}`, JSON.stringify(data), Constants.innertube_request_opts({ session, data, desktop: true })).catch((error) => error);
  if (response instanceof Error) return { success: false, status_code: response.response.status, message: response.message };
  return {
    success: true,
    status_code: response.status,
    data: response.data
  };
}

module.exports = { engage, notifications, getContinuation };