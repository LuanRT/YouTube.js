'use strict';

const messages = require('./messages');

class Proto {
  /**
   * Encodes search filters.
   * 
   * @param {string} period
   * @param {string} duration
   * @param {string} order
   *
   * @todo implement remaining filters.
   * 
   * @returns {string}
   */
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
  
  /**
   * Encodes livechat message parameters.
   * 
   * @param {string} channel_id
   * @param {string} video_id
   * 
   * @returns {string}
   */
  static encodeMessageParams(channel_id, video_id) {
    const buf = messages.LiveMessageParams.encode({
      params: { ids: { channel_id, video_id } },
      number_0: 1, number_1: 4
    });

    return Buffer.from(encodeURIComponent(Buffer.from(buf).toString('base64'))).toString('base64');
  }
  
  /**
   * Encodes comment section parameters.
   * 
   * @param {string} video_id
   * @param {object} options
   * @param {string} options.type
   * @param {string} options.sort_by
   * 
   * @returns {string}
   */
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
  
  /**
   * Encodes replies thread parameters.
   * 
   * @param {string} video_id
   * @param {string} comment_id
   * 
   * @returns {string}
   */
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
  
  /**
   * Encodes comment parameters.
   * 
   * @param {string} video_id
   * @returns {string}
   */
  static encodeCommentParams(video_id) {
    const buf = messages.CreateCommentParams.encode({
      video_id, params: { index: 0 },
      number: 7
    });
    
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  /**
   * Encodes comment reply parameters.
   * 
   * @param {string} comment_id
   * @param {string} video_id
   * 
   * @return {string}
   */
  static encodeCommentReplyParams(comment_id, video_id) {
    const buf = messages.CreateCommentReplyParams.encode({
      video_id, comment_id,
      params: { unk_num: 0 },
      unk_num: 7
    });

    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  /**
   * Encodes comment action parameters.
   * 
   * @param {string} type
   * @param {string} comment_id
   * @param {string} video_id
   * @param {string} [text]
   * @param {string} [target_language]
   * 
   * @returns {string}
   */
  static encodeCommentActionParams(type, args = {}) {
    const data = {
      type, 
      comment_id: args.comment_id, 
      video_id: args.video_id,
      
      /* Maybe these can be safely removed? */
      unk_num: 2, unk_num_1: 0, unk_num_2: 0,
      unk_num_3: "0", unk_num_4: 0,
      unk_num_5: 12, unk_num_6: 0,
    }
    
    if (args.hasOwnProperty('text')) {
      data.translate_comment_params = {
        params: {
          comment: {
            text: args.text
          }
        },
        comment_id: args.comment_id,
        target_language: args.target_language
      }
    }
    
    const buf = messages.PeformCommentActionParams.encode(data);
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  /**
   * Encodes notification preference parameters.
   * 
   * @param {string} channel_id
   * @param {number} index
   *
   * @returns {string}
   */
  static encodeNotificationPref(channel_id, index) {
    const buf = messages.NotificationPreferences.encode({
      channel_id, pref_id: { index },
      number_0: 0, number_1: 4
    });

    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
  
  /**
   * Encodes sound info parameters.
   * 
   * @param {string} id
   * @returns {string} 
   */
  static encodeSoundInfoParams(id) {
    const data = {
      sound: {
        params: {
          ids: {
            id_1: id,
            id_2: id,
            id_3: id
          }
        }
      }
    }

    const buf = messages.SoundInfoParams.encode(data);
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
}

module.exports = Proto;