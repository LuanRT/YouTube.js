import type { SessionOptions } from '../core/index.js';

export type InnerTubeConfig = SessionOptions;
export type InnerTubeClient = 'IOS' | 'WEB' | 'MWEB' | 'ANDROID' | 'YTMUSIC' | 'YTMUSIC_ANDROID' | 'YTSTUDIO_ANDROID' | 'TV' | 'TV_SIMPLY' |'TV_EMBEDDED' | 'YTKIDS' | 'WEB_EMBEDDED' | 'WEB_CREATOR';
export type EngagementType = 'ENGAGEMENT_TYPE_UNBOUND' | 'ENGAGEMENT_TYPE_VIDEO_LIKE' | 'ENGAGEMENT_TYPE_VIDEO_DISLIKE' | 'ENGAGEMENT_TYPE_SUBSCRIBE' | 'ENGAGEMENT_TYPE_PLAYBACK' | 'ENGAGEMENT_TYPE_YPC_GET_PREMIUM_PAGE' | 'ENGAGEMENT_TYPE_YPC_GET_DOWNLOAD_ACTION';

export type UploadDate = 'all' | 'today' | 'week' | 'month' | 'year';
export type SearchType = 'all' | 'video' | 'shorts' | 'channel' | 'playlist' | 'movie';
export type Duration = 'all' | 'over_twenty_mins' | 'under_three_mins' | 'three_to_twenty_mins';
export type Prioritize = 'relevance' | 'popularity';
export type Feature = 'hd' | 'subtitles' | 'creative_commons' | '3d' | 'live' | 'purchased' | '4k' | '360' | 'location' | 'hdr' | 'vr180';

export type SearchFilters = {
  upload_date?: UploadDate;
  type?: SearchType;
  duration?: Duration;
  prioritize?: Prioritize;
  features?: Feature[];
};

export type UpdateVideoMetadataOptions = Partial<{
  title: string;
  description: string;
  tags: string[];
  category: number;
  license: string;
  age_restricted: boolean;
  made_for_kids: boolean;
  thumbnail: Uint8Array;
  privacy: 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
}>;

export type UploadedVideoMetadataOptions = Partial<{
  title: string;
  description: string;
  privacy: 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
  is_draft: boolean;
}>;

export type MusicSearchType = 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';

export type MusicSearchFilters = {
  type?: MusicSearchType;
};