import type { SessionOptions } from '../core/index.js';

export type InnerTubeConfig = SessionOptions;
export type InnerTubeClient = 'IOS' | 'WEB' | 'ANDROID' | 'YTMUSIC' | 'YTMUSIC_ANDROID' | 'YTSTUDIO_ANDROID' | 'TV_EMBEDDED' | 'YTKIDS' | 'WEB_EMBEDDED' | 'WEB_CREATOR';

export type UploadDate = 'all' | 'hour' | 'today' | 'week' | 'month' | 'year';
export type SearchType = 'all' | 'video' | 'channel' | 'playlist' | 'movie';
export type Duration = 'all' | 'short' | 'medium' | 'long';
export type SortBy = 'relevance' | 'rating' | 'upload_date' | 'view_count';
export type Feature = 'hd' | 'subtitles' | 'creative_commons' | '3d' | 'live' | 'purchased' | '4k' | '360' | 'location' | 'hdr' | 'vr180';

export type SearchFilters = {
  upload_date?: UploadDate;
  type?: SearchType;
  duration?: Duration;
  sort_by?: SortBy;
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