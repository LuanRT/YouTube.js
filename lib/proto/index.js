'use strict';

const messages = require('./messages');

class Proto {
  static encodeSearchFilter(period, duration, order) {
    const periods = { 'any': null, 'hour': 1, 'day': 2, 'week': 3, 'month': 4, 'year': 5 };
    const durations = { 'any': null, 'short': 1, 'long': 2 };
    const orders = { 'relevance': null, 'rating': 1, 'age': 2, 'views': 3 };

    const buf = messages.SearchFilter.encode({
      number: orders[order],
      filter: {
        param_0: periods[period],
        param_1: (period == 'hour' && order == 'relevance') ? null : 1,
        param_2: durations[duration]
      }
    });

    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  static encodeMessageParams(channel_id, video_id) {
    const buf = messages.LiveMessageParams.encode({
      params: { ids: { channel_id, video_id } },
      number_0: 1, number_1: 4
    });

    return Buffer.from(encodeURIComponent(Buffer.from(buf).toString('base64'))).toString('base64');
  }
  
  static encodeCommentsSectionParams(video_id, options = {}) {
    const sort_menu = { TOP_COMMENTS: 0, NEWEST_FIRST: 1 };
    
    const buf = messages.GetCommentsSectionParams.encode({
      ctx: { video_id },
      unk_param: 6,
      params: {
        opts: {
          video_id,
          sort_by: sort_menu[options.sort_by || 'TOP_COMMENTS'],
          type: options.type || 2
        },
        target: 'comments-section'
      }
    });
    
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  static encodeCommentRepliesParams(video_id, comment_id) {
    const buf = messages.GetCommentsSectionParams.encode({
      ctx: { video_id },
      unk_param: 6,
      params: {
        replies_opts: {
          video_id, comment_id,
          unkopts: { unk_param: 0 },
          unk_param_1: 1, unk_param_2: 10,
          channel_id: ' ' // Seems like this can be omitted
        },
        target: `comment-replies-item-${comment_id}`
      }
    });
    
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  static encodeCommentParams(video_id) {
    const buf = messages.CreateCommentParams.encode({
      video_id, params: { index: 0 },
      number: 7
    });
    
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  static encodeCommentReplyParams(comment_id, video_id) {
    const buf = messages.CreateCommentReplyParams.encode({
      video_id, comment_id,
      params: { unk_num: 0 },
      unk_num: 7
    });

    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  static encodeCommentActionParams(type, comment_id, video_id) {
    const buf = messages.PeformCommentActionParams.encode({
      type, comment_id, video_id,
      unk_num: 2, unk_num_1: 0, unk_num_2: 0,
      unk_num_3: "0", unk_num_4: 0,
      unk_num_5: 12, unk_num_6: 0,
    });

    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  static encodeNotificationPref(channel_id, index) {
    const buf = messages.NotificationPreferences.encode({
      channel_id, pref_id: { index },
      number_0: 0, number_1: 4
    });

    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
}

module.exports = Proto;