import * as messages from './messages';
import { CLIENTS } from '../utils/Constants';

class Proto {
  /**
   * Encodes visitor data.
   *
   * @param {string} id
   * @param {number} timestamp
   * @returns {string}
   */
  static encodeVisitorData(id, timestamp) {
    const buf = messages.VisitorData.encode({ id, timestamp });
    return encodeURIComponent(Buffer.from(buf).toString('base64').replace(/\/|\+/g, '_'));
  }

  /**
   * Encodes basic channel analytics parameters.
   *
   * @param {string} channel_id
   * @returns {string}
   */
  static encodeChannelAnalyticsParams(channel_id) {
    const buf = messages.ChannelAnalytics.encode({
      params: {
        channel_id
      }
    });
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }

  /**
   * Encodes search filters.
   *
   * @param {object} filters
   * @param {string} [filters.upload_date] - all | hour | today | week | month | year
   * @param {string} [filters.type] - all | video | channel | playlist | movie
   * @param {string} [filters.duration] - all | short | medium | long
   * @param {string} [filters.sort_by] - relevance | rating | upload_date | view_count
   * @returns {string}
   */
  static encodeSearchFilters(filters) {
    const upload_date = {
      all: null,
      hour: 1,
      today: 2,
      week: 3,
      month: 4,
      year: 5
    };

    const type = {
      all: null,
      video: 1,
      channel: 2,
      playlist: 3,
      movie: 4
    };

    const duration = {
      all: null,
      short: 1,
      long: 2,
      medium: 3
    };

    const order = {
      relevance: null,
      rating: 1,
      upload_date: 2,
      view_count: 3
    };

    const data = {};

    if (filters)
      data.filters = {};
    else
      data.no_filter = 0;

    if (filters) {
      if (filters.upload_date && filters.type !== 'video')
        throw new Error(`Upload date filter cannot be used with type ${filters.type}`);

      if (filters.upload_date) {
        data.filters.upload_date = upload_date[filters.upload_date];
      }

      if (filters.type) {
        data.filters.type = type[filters.type];
      }

      if (filters.duration) {
        data.filters.duration = duration[filters.duration];
      }

      if (filters.sort_by && filters.sort_by !== 'relevance') {
        data.sort_by = order[filters.sort_by];
      }
    }

    const buf = messages.SearchFilter.encode(data);
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }

  /**
   * Encodes YouTube Music search filters.
   * @param {object} filters
   * @param {string} filters.type - all | song | video | album | playlist | artist
   * @returns {string}
   */
  static encodeMusicSearchFilters(filters = {}) {
    const data = {
      filters: {
        type: {}
      }
    };

    data.filters.type[filters.type || 'all'] = 1;

    const buf = messages.MusicSearchFilter.encode(data);
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }

  /**
   * Encodes livechat message parameters.
   * @param {string} channel_id
   * @param {string} video_id
   * @returns {string}
   */
  static encodeMessageParams(channel_id, video_id) {
    const buf = messages.LiveMessageParams.encode({
      params: {
        ids: {
          channel_id, video_id
        }
      },
      number_0: 1, number_1: 4
    });

    return Buffer.from(encodeURIComponent(Buffer.from(buf).toString('base64'))).toString('base64');
  }

  /**
   * Encodes comment section parameters.
   * @param {string} video_id
   * @param {object} options
   * @param {string} [options.type]
   * @param {string} [options.sort_by]
   * @returns {string}
   */
  static encodeCommentsSectionParams(video_id, options = {}) {
    const sort_options = {
      TOP_COMMENTS: 0,
      NEWEST_FIRST: 1
    };

    const buf = messages.GetCommentsSectionParams.encode({
      ctx: {
        video_id
      },
      unk_param: 6,
      params: {
        opts: {
          video_id,
          sort_by: sort_options[options.sort_by || 'TOP_COMMENTS'],
          type: options.type || 2
        },
        target: 'comments-section'
      }
    });

    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }

  /**
   * Encodes comment replies parameters.
   * @param {string} video_id
   * @param {string} comment_id
   * @returns {string}
   */
  static encodeCommentRepliesParams(video_id, comment_id) {
    const buf = messages.GetCommentsSectionParams.encode({
      ctx: {
        video_id
      },
      unk_param: 6,
      params: {
        replies_opts: {
          video_id, comment_id,
          unkopts: {
            unk_param: 0
          },
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
   * @param {string} video_id
   * @returns {string}
   */
  static encodeCommentParams(video_id) {
    const buf = messages.CreateCommentParams.encode({
      video_id, params: {
        index: 0
      },
      number: 7
    });
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }

  /**
   * Encodes comment reply parameters.
   * @param {string} comment_id
   * @param {string} video_id
   * @returns {string}
   */
  static encodeCommentReplyParams(comment_id, video_id) {
    const buf = messages.CreateCommentReplyParams.encode({
      video_id, comment_id,
      params: {
        unk_num: 0
      },
      unk_num: 7
    });
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }

  /**
   * Encodes comment action parameters.
   * @param {*} type
   * @param {object} [args]
   * @param {string} [args.comment_id]
   * @param {string} [args.video_id]
   * @param {string} [args.text]
   * @param {string} [args.target_language]
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
      };
    }

    const buf = messages.PeformCommentActionParams.encode(data);
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }

  /**
   * Encodes notification preference parameters.
   * @param {string} channel_id
   * @param {number} index
   * @returns {string}
   */
  static encodeNotificationPref(channel_id, index) {
    const buf = messages.NotificationPreferences.encode({
      channel_id, pref_id: {
        index
      },
      number_0: 0, number_1: 4
    });

    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }

  /**
   * Encodes a custom thumbnail payload.
   */
  static encodeCustomThumbnailPayload(video_id, bytes) {
    const data = {
      context: {
        client: {
          unkparam: 14,
          client_name: CLIENTS.ANDROID.NAME,
          client_version: CLIENTS.ANDROID.VERSION
        }
      },
      target: video_id,
      video_settings: {
        type: 3,
        thumbnail: {
          image_data: bytes
        }
      }
    };

    const buf = messages.InnertubePayload.encode(data);
    return Buffer.from(buf);
  }

  /**
   * Encodes sound info parameters.
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
    };

    const buf = messages.SoundInfoParams.encode(data);
    return encodeURIComponent(Buffer.from(buf).toString('base64'));
  }
}

export default Proto;