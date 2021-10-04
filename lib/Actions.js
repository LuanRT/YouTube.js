'use strict';

const axios = require('axios');
const Utils = require('./Utils');
const Constants = require('./Constants');

async function subscribe(session, video_id, channel_id) {
  if (!session.logged_in) throw new Error('You must be logged in to subscribe to a channel');
  let data = {
    context: session.context,
    channelIds: [ channel_id ]
  };
  
  const response = await axios.post(Constants.urls.YT_BASE_URL + '/youtubei/v1/subscription/subscribe?key=' + session.key, JSON.stringify(data), Constants.innertube_request_opts({ session, id: video_id, data })).catch((error) => error);
  if (response instanceof Error) {
    return {
      success: false,
      status_code: response.response.status,
      message: response.message
    };
  } else if (response.data.responseContext) {
    return {
      success: true,
      status_code: response.status,
    };
  }
}

async function unsubscribe(session, video_id, channel_id) {
  if (!session.logged_in) throw new Error('You must be logged in to unsubscribe from a channel');
  let data = {
    context: session.context,
    channelIds: [ channel_id ]
  };
  
  const response = await axios.post(Constants.urls.YT_BASE_URL + '/youtubei/v1/subscription/unsubscribe?key=' + session.key, JSON.stringify(data), Constants.innertube_request_opts({ session, id: video_id, data })).catch((error) => error);
  if (response instanceof Error) {
    return {
      success: false,
      status_code: response.response.status,
      message: response.message
    };
  } else if (response.data.responseContext) {
    return {
      success: true,
      status_code: response.status,
    };
  }
}

async function likeVideo(session, video_id) {
  if (!session.logged_in) throw new Error('You must be logged in to like a video');
  let data = {
    context: session.context,
    target: {
      videoId: video_id
    }
  };

  const response = await axios.post(Constants.urls.YT_BASE_URL + '/youtubei/v1/like/like?key=' + session.key, JSON.stringify(data), Constants.innertube_request_opts({ session, id: video_id, data })).catch((error) => error);
  if (response instanceof Error) {
    return {
      success: false,
      status_code: response.response.status,
      message: response.message
    };
  } else if (response.data.responseContext) {
    return {
      success: true,
      status_code: response.status,
    };
  }
}

async function dislikeVideo(session, video_id) {
  if (!session.logged_in) throw new Error('You must be logged in to like a video');
  let data = {
    context: session.context,
    target: {
      videoId: video_id
    }
  };

  const response = await axios.post(Constants.urls.YT_BASE_URL + '/youtubei/v1/like/dislike?key=' + session.key, JSON.stringify(data), Constants.innertube_request_opts({ session, id: video_id, data })).catch((error) => error);
  if (response instanceof Error) {
    return {
      success: false,
      status_code: response.response.status,
      message: response.message
    };
  } else if (response.data.responseContext) {
    return {
      success: true,
      status_code: response.status,
    };
  }
}

async function removeLike(session, video_id) {
  if (!session.logged_in) throw new Error('You must be logged in to remove a like/dislike.');
  let data = {
    context: session.context,
    target: {
      videoId: video_id
    }
  };

  const response = await axios.post(Constants.urls.YT_BASE_URL + '/youtubei/v1/like/removelike?key=' + session.key, JSON.stringify(data), Constants.innertube_request_opts({ session, id: video_id, data })).catch((error) => error);
  if (response instanceof Error) {
    return {
      success: false,
      status_code: response.response.status,
      message: response.message
    };
  } else if (response.data.responseContext) {
    return {
      success: true,
      status_code: response.status,
    };
  }
}

async function commentVideo(session, video_id, text) {
  if (!text) throw new Error('No text was provided');
  if (!session.logged_in) throw new Error('You must be logged in to post a comment.');

  let data = {
    context: session.context,
    commentText: text,
    createCommentParams: Utils.encodeId(video_id)
  };

  const response = await axios.post(Constants.urls.YT_BASE_URL + '/youtubei/v1/comment/create_comment?key=' + session.key, JSON.stringify(data), Constants.innertube_request_opts({ session, video_id, data })).catch((error) => error);
  if (response instanceof Error) {
    return {
      success: false,
      status_code: response.response.status,
      message: response.message
    };
  } else if (response.data.responseContext) {
    return {
      success: true,
      status_code: response.status,
    };
  }
}

module.exports = { subscribe, unsubscribe, likeVideo, dislikeVideo, removeLike, commentVideo };