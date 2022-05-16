'use strict';

const messages = require('./messages');

class Proto {
  /**
   * Encodes visitor data.
   * 
   * @param {string} id
   * @param {number} timestamp
   * 
   * @returns {string}
   */
  static encodeVisitorData(id, timestamp) {
    const buf = messages.VisitorData.encode({ id, timestamp });
    return encodeURIComponent(Buffer.from(buf).toString('base64').replace(/\//g, '_'));
  }
  
  /**
   * Encodes search filters.
   * 
   * @param {object} filters
   * @param {string} [filters.upload_date] - any | last_hour | today | this_week | this_month | this_year
   * @param {string} [filters.type] - any | video | channel | playlist | movie
   * @param {string} [filters.duration] - any | short | medium | long 
   * @param {string} [filters.sort_by] - relevance | rating | upload_date | view_count
   * @todo implement remaining filters.
   * 
   * @returns {string}
   */
  static encodeSearchFilter(filters) {
    const upload_dates = {
      'any': null,
      'last_hour': 1,
      'today': 2,
      'this_week': 3,
      'this_month': 4,
      'this_year': 5
    };

    const types = {
      'any': null,
      'video': 1,
      'channel': 2,
      'playlist': 3,
      'movie': 4
    };

    const durations = {
      'any': null,
      'short': 1,
      'medium': 2,
      'long': 3
    };

    const orders = {
      'relevance': null,
      'rating': 1,
      'upload_date': 2,
      'view_count': 3
    };

    const data = {};

    filters &&
      (data.filters = {}) ||
      (data.no_filter = 0);

    if (filters) {
      if (filters.upload_date) {
        if (!['video', 'movie'].includes(filters.type))
          throw new Error('Cannot use upload date filter with type ' + filters.type);
      }

      filters.upload_date &&
        (data.filters.param_0 = upload_dates[filters.upload_date]);

      filters.type &&
        (data.filters.param_1 = types[filters.type]);

      filters.duration &&
        (data.filters.param_2 = durations[filters.duration]);

      filters.sort_by &&
        (filters.sort_by !== 'relevance') &&
        (data.filter = orders[filters.sort_by]);
    }
    
    const buf = messages.SearchFilter.encode(data);
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
    const data = {};
    
    data.type = type;
    data.video_id = args.video_id || '';
    data.comment_id = args.comment_id || '';
    data.unk_num = 2;
    
    if (args.hasOwnProperty('text')) {
      args.comment_id && (delete data.unk_num);
      
      data.translate_comment_params = {
        params: {
          comment: {
            text: args.text
          }
        },
        comment_id: args.comment_id || '',
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