'use strict';

const Fs = require('fs');
const Proto = require('protons');

/**
 *  Encodes advanced search filters.
 *
 * @param {string} period - Period in which a video is uploaded: any | hour | day | week | month | year
 * @param {string} duration - The duration of a video: any | short | long
 * @param {string} order - The order of the search results: relevance | rating | age | views
 * @returns {string}
 */
function encodeSearchFilter(period, duration, order) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/youtube.proto`));

  const periods = { 'any': null, 'hour': 1, 'day': 2, 'week': 3, 'month': 4, 'year': 5 };
  const durations = { 'any': null, 'short': 1, 'long': 2 };
  const orders = { 'relevance': null, 'rating': 1, 'age': 2, 'views': 3 };

  const search_filter_buff = youtube_proto.SearchFilter.encode({
    number: orders[order],
    filter: {
      param_0: periods[period],
      param_1: (period == 'hour' && order == 'relevance') ? null : 1,
      param_2: durations[duration]
    }
  });

  return encodeURIComponent(Buffer.from(search_filter_buff).toString('base64'));
}

/**
 * Encodes livestream message parameters.
 *
 * @param {string} channel_id - The id of the channel hosting the livestream.
 * @param {string} video_id - The id of the livestream.
 * @returns {string}
 */
function encodeMessageParams(channel_id, video_id) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/youtube.proto`));

  const buf = youtube_proto.LiveMessageParams.encode({
    params: {
      ids: { channel_id, video_id }
    },
    number_0: 1,
    number_1: 4
  });

  return Buffer.from(encodeURIComponent(Buffer.from(buf).toString('base64'))).toString('base64');
}

/**
 * Encodes comment parameters.
 *
 * @param {string} video_id - The id of the video you're commenting on.
 * @returns {string}
 */
function encodeCommentParams(video_id) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/youtube.proto`));

  const buf = youtube_proto.CreateCommentParams.encode({
    video_id,
    params: { index: 0 },
    number: 7
  });

  return encodeURIComponent(Buffer.from(buf).toString('base64'));
}

/**
 * Encodes comment reply parameters.
 *
 * @param {string} comment_id - The id of the comment.
 * @param {string} video_id - The id of the video you're commenting on.
 * @returns {string}
 */
function encodeCommentReplyParams(comment_id, video_id) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/youtube.proto`));

  const buf = youtube_proto.CreateCommentReplyParams.encode({
    video_id, comment_id,
    params: { unk_num: 0 },
    unk_num: 7
  });

  return encodeURIComponent(Buffer.from(buf).toString('base64'));
}

/**
 * Encodes comment action parameters (liking, disliking, reporting a comment etc).
 *
 * @param {string} type - Type of action.
 * @param {string} comment_id - The id of the comment.
 * @param {string} video_id - The id of the video you're commenting on.
 * @param {string} channel_id - The id of the channel.
 * @returns {string}
 */
function encodeCommentActionParams(type, comment_id, video_id, channel_id) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/youtube.proto`));
  
  const buf = youtube_proto.PeformCommentActionParams.encode({
    type, comment_id, channel_id, video_id,
    unk_num: 2, unk_num_1: 0, unk_num_2: 0,
    unk_num_3: "0", unk_num_4: 0,
    unk_num_5: 12, unk_num_6: 0,
  });

  return encodeURIComponent(Buffer.from(buf).toString('base64'));
}

/**
 * Encodes notification preferences.
 *
 * @param {string} channel_id - The id of the channel.
 * @param {string} index - The index of the preference id.
 * @returns {string}
 */
function encodeNotificationPref(channel_id, index) {
  const youtube_proto = Proto(Fs.readFileSync(`${__dirname}/youtube.proto`));

  const buf = youtube_proto.NotificationPreferences.encode({
    channel_id,
    pref_id: { index },
    number_0: 0,
    number_1: 4
  });

  return encodeURIComponent(Buffer.from(buf).toString('base64'));
}

module.exports = { encodeMessageParams, encodeCommentParams, encodeCommentReplyParams, encodeCommentActionParams, encodeNotificationPref, encodeSearchFilter };