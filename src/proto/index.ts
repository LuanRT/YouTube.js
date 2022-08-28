import { CLIENTS } from '../utils/Constants';
import { u8ToBase64 } from '../utils/Utils';
import { ChannelAnalytics, CreateCommentParams, CreateCommentReplyParams, GetCommentsSectionParams, InnertubePayload, LiveMessageParams, MusicSearchFilter, NotificationPreferences, PeformCommentActionParams, SearchFilter, SoundInfoParams, VisitorData } from './youtube';

class Proto {
  /**
   * Encodes visitor data.
   */
  static encodeVisitorData(id: string, timestamp: number) {
    const buf = VisitorData.toBinary({
      id,
      timestamp
    });
    return encodeURIComponent(u8ToBase64(buf).replace(/\/|\+/g, '_'));
  }

  /**
   * Encodes basic channel analytics parameters.
   */
  static encodeChannelAnalyticsParams(channel_id: string) {
    const buf = ChannelAnalytics.toBinary({
      params: {
        channelId: channel_id
      }
    });
    return encodeURIComponent(u8ToBase64(buf));
  }

  /**
   * Encodes search filters.
   */
  static encodeSearchFilters(filters: {
    upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year',
    type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie',
    duration?: 'all' | 'short' | 'medium' | 'long',
    sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count'
  }) {
    const upload_date = {
      all: undefined,
      hour: 1,
      today: 2,
      week: 3,
      month: 4,
      year: 5
    };

    const type = {
      all: undefined,
      video: 1,
      channel: 2,
      playlist: 3,
      movie: 4
    };

    const duration = {
      all: undefined,
      short: 1,
      long: 2,
      medium: 3
    };

    const order = {
      relevance: undefined,
      rating: 1,
      upload_date: 2,
      view_count: 3
    };

    const data: SearchFilter = {};

    if (filters)
      data.filters = {};
    else
      data.noFilter = 0;

    if (data.filters) {
      if (filters.upload_date && filters.type !== 'video')
        throw new Error(`Upload date filter cannot be used with type ${filters.type}`);

      if (filters.upload_date) {
        data.filters.uploadDate = upload_date[filters.upload_date];
      }

      if (filters.type) {
        data.filters.type = type[filters.type];
      }

      if (filters.duration) {
        data.filters.duration = duration[filters.duration];
      }

      if (filters.sort_by && filters.sort_by !== 'relevance') {
        data.sortBy = order[filters.sort_by];
      }
    }

    const buf = SearchFilter.toBinary(data);
    return encodeURIComponent(u8ToBase64(buf));
  }

  /**
   * Encodes YouTube Music search filters.
   */
  static encodeMusicSearchFilters(filters: {
    type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist'
  }) {
    const data: MusicSearchFilter = {
      filters: {
        type: {}
      }
    };

    // TODO: See protobuf definition (protoc doesn't allow zero index: optional int32 all = 0;)
    if (filters.type && filters.type !== 'all' && data.filters?.type)
      data.filters.type[filters.type] = 1;

    const buf = MusicSearchFilter.toBinary(data);
    return encodeURIComponent(u8ToBase64(buf));
  }

  /**
   * Encodes livechat message parameters.
   */
  static encodeMessageParams(channel_id: string, video_id: string) {
    const buf = LiveMessageParams.toBinary({
      params: {
        ids: {
          channelId: channel_id, videoId: video_id
        }
      },
      number0: 1, number1: 4
    });

    return btoa(encodeURIComponent(u8ToBase64(buf)));
  }

  /**
   * Encodes comment section parameters.
   */
  static encodeCommentsSectionParams(video_id: string, options: {
    type?: number,
    sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST'
  } = {}) {
    const sort_options = {
      TOP_COMMENTS: 0,
      NEWEST_FIRST: 1
    };

    const buf = GetCommentsSectionParams.toBinary({
      ctx: {
        videoId: video_id
      },
      unkParam: 6,
      params: {
        opts: {
          videoId: video_id,
          sortBy: sort_options[options.sort_by || 'TOP_COMMENTS'],
          type: options.type || 2
        },
        target: 'comments-section'
      }
    });

    return encodeURIComponent(u8ToBase64(buf));
  }

  /**
   * Encodes comment replies parameters.
   */
  static encodeCommentRepliesParams(video_id: string, comment_id: string) {
    const buf = GetCommentsSectionParams.toBinary({
      ctx: {
        videoId: video_id
      },
      unkParam: 6,
      params: {
        repliesOpts: {
          videoId: video_id, commentId: comment_id,
          unkopts: {
            unkParam: 0
          },
          unkParam1: 1, unkParam2: 10,
          channelId: ' ' // XXX: Seems like this can be omitted
        },
        target: `comment-replies-item-${comment_id}`
      }
    });

    return encodeURIComponent(u8ToBase64(buf));
  }

  /**
   * Encodes comment parameters.
   */
  static encodeCommentParams(video_id: string) {
    const buf = CreateCommentParams.toBinary({
      videoId: video_id,
      params: {
        index: 0
      },
      number: 7
    });
    return encodeURIComponent(u8ToBase64(buf));
  }

  /**
   * Encodes comment reply parameters.
   */
  static encodeCommentReplyParams(comment_id: string, video_id: string) {
    const buf = CreateCommentReplyParams.toBinary({
      videoId: video_id,
      commentId: comment_id,
      params: {
        unkNum: 0
      },
      unkNum: 7
    });
    return encodeURIComponent(u8ToBase64(buf));
  }

  /**
   * Encodes comment action parameters.
   */
  static encodeCommentActionParams(type: number, args: {
    comment_id?: string,
    video_id?: string,
    text?: string,
    target_language?: string
  } = {}) {
    const data: PeformCommentActionParams = {
      type,
      commentId: args.comment_id || ' ',
      videoId: args.video_id || ' ',
      unkNum: 2
    };

    if (args.hasOwnProperty('text')) {
      if (typeof args.target_language !== 'string')
        throw new Error('target_language must be a string');
      args.comment_id && (delete data.unkNum);
      data.translateCommentParams = {
        params: {
          comment: {
            text: args.text as string
          }
        },
        commentId: args.comment_id || ' ',
        targetLanguage: args.target_language
      };
    }

    const buf = PeformCommentActionParams.toBinary(data);
    return encodeURIComponent(u8ToBase64(buf));
  }

  /**
   * Encodes notification preference parameters.
   */
  static encodeNotificationPref(channel_id: string, index: number) {
    const buf = NotificationPreferences.toBinary({
      channelId: channel_id,
      prefId: {
        index
      },
      number0: 0, number1: 4
    });

    return encodeURIComponent(u8ToBase64(buf));
  }

  /**
   * Encodes a custom thumbnail payload.
   */
  static encodeCustomThumbnailPayload(video_id: string, bytes: Uint8Array) {
    const data: InnertubePayload = {
      context: {
        client: {
          unkparam: 14,
          clientName: CLIENTS.ANDROID.NAME,
          clientVersion: CLIENTS.ANDROID.VERSION
        }
      },
      target: video_id,
      videoSettings: {
        type: 3,
        thumbnail: {
          imageData: bytes
        }
      }
    };

    const buf = InnertubePayload.toBinary(data);
    return buf;
  }

  /**
   * Encodes sound info parameters.
   */
  static encodeSoundInfoParams(id: string) {
    const data: SoundInfoParams = {
      sound: {
        params: {
          ids: {
            id1: id,
            id2: id,
            id3: id
          }
        }
      }
    };

    const buf = SoundInfoParams.toBinary(data);
    return encodeURIComponent(u8ToBase64(buf));
  }
}

export default Proto;