import { CLIENTS } from '../utils/Constants.js';
import { base64ToU8, u8ToBase64 } from '../utils/Utils.js';
import type { UpdateVideoMetadataOptions } from '../types/index.js';

import * as VisitorData from './generated/messages/youtube/VisitorData.js';
import * as ChannelAnalytics from './generated/messages/youtube/ChannelAnalytics.js';
import * as SearchFilter from './generated/messages/youtube/SearchFilter.js';
import type * as SearchFilter_Filters from './generated/messages/youtube/(SearchFilter)/Filters.js';
import * as MusicSearchFilter from './generated/messages/youtube/MusicSearchFilter.js';
import * as LiveMessageParams from './generated/messages/youtube/LiveMessageParams.js';
import * as GetCommentsSectionParams from './generated/messages/youtube/GetCommentsSectionParams.js';
import * as CreateCommentParams from './generated/messages/youtube/CreateCommentParams.js';
import * as PeformCommentActionParams from './generated/messages/youtube/PeformCommentActionParams.js';
import * as NotificationPreferences from './generated/messages/youtube/NotificationPreferences.js';
import * as InnertubePayload from './generated/messages/youtube/InnertubePayload.js';
import * as Hashtag from './generated/messages/youtube/Hashtag.js';

export function encodeVisitorData(id: string, timestamp: number): string {
  const buf = VisitorData.encodeBinary({ id, timestamp });
  return encodeURIComponent(u8ToBase64(buf).replace(/\+/g, '-').replace(/\//g, '_'));
}

export function decodeVisitorData(visitor_data: string): VisitorData.Type {
  const data = VisitorData.decodeBinary(base64ToU8(decodeURIComponent(visitor_data)));
  return data;
}

export function encodeChannelAnalyticsParams(channel_id: string): string {
  const buf = ChannelAnalytics.encodeBinary({
    params: {
      channelId: channel_id
    }
  });
  return encodeURIComponent(u8ToBase64(buf));
}

export function encodeSearchFilters(filters: {
  upload_date?: 'all' | 'hour' | 'today' | 'week' | 'month' | 'year',
  type?: 'all' | 'video' | 'channel' | 'playlist' | 'movie',
  duration?: 'all' | 'short' | 'medium' | 'long',
  sort_by?: 'relevance' | 'rating' | 'upload_date' | 'view_count',
  features?: ('hd' | 'subtitles' | 'creative_commons' | '3d' | 'live' | 'purchased' | '4k' | '360' | 'location' | 'hdr' | 'vr180')[]
}): string {
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

  const features = {
    hd: 'featuresHd',
    subtitles: 'featuresSubtitles',
    creative_commons: 'featuresCreativeCommons',
    '3d': 'features3D',
    live: 'featuresLive',
    purchased: 'featuresPurchased',
    '4k': 'features4K',
    '360': 'features360',
    location: 'featuresLocation',
    hdr: 'featuresHdr',
    vr180: 'featuresVr180'
  };

  const data: SearchFilter.Type = {};

  if (filters)
    data.filters = {};
  else
    data.noFilter = 0;

  if (data.filters) {
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

    if (filters.features) {
      for (const feature of filters.features) {
        data.filters[features[feature] as keyof SearchFilter_Filters.Type] = 1;
      }
    }
  }

  const buf = SearchFilter.encodeBinary(data);
  return encodeURIComponent(u8ToBase64(buf));
}

export function encodeMusicSearchFilters(filters: {
  type?: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist'
}): string {
  const data: MusicSearchFilter.Type = {
    filters: {
      type: {}
    }
  };

  // TODO: See protobuf definition (protoc doesn't allow zero index: optional int32 all = 0;)
  if (filters.type && filters.type !== 'all' && data.filters?.type)
    data.filters.type[filters.type] = 1;

  const buf = MusicSearchFilter.encodeBinary(data);
  return encodeURIComponent(u8ToBase64(buf));
}

export function encodeMessageParams(channel_id: string, video_id: string): string {
  const buf = LiveMessageParams.encodeBinary({
    params: {
      ids: {
        channelId: channel_id, videoId: video_id
      }
    },
    number0: 1, number1: 4
  });

  return btoa(encodeURIComponent(u8ToBase64(buf)));
}

export function encodeCommentsSectionParams(video_id: string, options: {
  type?: number,
  sort_by?: 'TOP_COMMENTS' | 'NEWEST_FIRST'
} = {}): string {
  const sort_options = {
    TOP_COMMENTS: 0,
    NEWEST_FIRST: 1
  };

  const buf = GetCommentsSectionParams.encodeBinary({
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

export function encodeCommentParams(video_id: string): string {
  const buf = CreateCommentParams.encodeBinary({
    videoId: video_id,
    params: {
      index: 0
    },
    number: 7
  });
  return encodeURIComponent(u8ToBase64(buf));
}

export function encodeCommentActionParams(type: number, args: {
  comment_id?: string,
  video_id?: string,
  text?: string,
  target_language?: string
} = {}): string {
  const data: PeformCommentActionParams.Type = {
    type,
    commentId: args.comment_id || ' ',
    videoId: args.video_id || ' ',
    channelId: ' ',
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

  const buf = PeformCommentActionParams.encodeBinary(data);
  return encodeURIComponent(u8ToBase64(buf));
}

export function encodeNotificationPref(channel_id: string, index: number): string {
  const buf = NotificationPreferences.encodeBinary({
    channelId: channel_id,
    prefId: {
      index
    },
    number0: 0, number1: 4
  });

  return encodeURIComponent(u8ToBase64(buf));
}

export function encodeVideoMetadataPayload(video_id: string, metadata: UpdateVideoMetadataOptions): Uint8Array {
  const data: InnertubePayload.Type = {
    context: {
      client: {
        unkparam: 14,
        clientName: CLIENTS.ANDROID.NAME,
        clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
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

  const buf = InnertubePayload.encodeBinary(data);

  return buf;
}

export function encodeCustomThumbnailPayload(video_id: string, bytes: Uint8Array): Uint8Array {
  const data: InnertubePayload.Type = {
    context: {
      client: {
        unkparam: 14,
        clientName: CLIENTS.ANDROID.NAME,
        clientVersion: CLIENTS.YTSTUDIO_ANDROID.VERSION
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

  const buf = InnertubePayload.encodeBinary(data);

  return buf;
}

export function encodeHashtag(hashtag: string): string {
  const buf = Hashtag.encodeBinary({
    params: {
      hashtag,
      type: 1
    }
  });

  return encodeURIComponent(u8ToBase64(buf));
}