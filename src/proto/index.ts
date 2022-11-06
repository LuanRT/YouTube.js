import { CLIENTS } from '../utils/Constants';
import { u8ToBase64 } from '../utils/Utils';
import { VideoMetadata } from '../core/Studio';

import { ChannelAnalytics, CreateCommentParams, GetCommentsSectionParams, InnertubePayload, LiveMessageParams, MusicSearchFilter, NotificationPreferences, PeformCommentActionParams, SearchFilter } from './youtube';

class Proto {
  static encodeChannelAnalyticsParams(channel_id: string) {
    const buf = ChannelAnalytics.toBinary({
      params: {
        channelId: channel_id
      }
    });
    return encodeURIComponent(u8ToBase64(buf));
  }

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

  static encodeVideoMetadataPayload(video_id: string, metadata: VideoMetadata) {
    const data: InnertubePayload = {
      context: {
        client: {
          unkparam: 14,
          clientName: CLIENTS.ANDROID.NAME,
          clientVersion: CLIENTS.ANDROID.VERSION
        }
      },
      target: video_id
    };

    if (Reflect.has(metadata, 'title'))
      data.title = { text: metadata.title || '' };

    if (Reflect.has(metadata, 'description'))
      data.description = { text: metadata.description || '' };

    if (Reflect.has(metadata, 'license'))
      data.license = { type: metadata.license || '' };

    if (Reflect.has(metadata, 'tags'))
      data.tags = { list: metadata.tags || [] };

    if (Reflect.has(metadata, 'category'))
      data.category = { id: metadata.category || 0 };

    if (Reflect.has(metadata, 'privacy')) {
      switch (metadata.privacy) {
        case 'PUBLIC':
          data.privacy = { type: 1 };
          break;
        case 'UNLISTED':
          data.privacy = { type: 2 };
          break;
        case 'PRIVATE':
          data.privacy = { type: 3 };
          break;
        default:
          throw new Error('Invalid visibility option');
      }
    }

    if (Reflect.has(metadata, 'made_for_kids')) {
      data.madeForKids = {
        unkparam: 1,
        choice: metadata.made_for_kids ? 1 : 2
      };
    }

    if (Reflect.has(metadata, 'age_restricted')) {
      data.ageRestricted = {
        unkparam: 1,
        choice: metadata.age_restricted ? 1 : 2
      };
    }

    const buf = InnertubePayload.toBinary(data);

    return buf;
  }

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
      videoThumbnail: {
        type: 3,
        thumbnail: {
          imageData: bytes
        }
      }
    };

    const buf = InnertubePayload.toBinary(data);

    return buf;
  }
}

export default Proto;