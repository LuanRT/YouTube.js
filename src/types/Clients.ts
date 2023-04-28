// Studio.ts
export type UpdateVideoMetadataOptions = Partial<{
  title: string;
  description: string;
  tags: string[];
  category: number;
  license: string;
  age_restricted: boolean;
  made_for_kids: boolean;
  privacy: 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
}>;

export type UploadedVideoMetadataOptions = Partial<{
  title: string;
  description: string;
  privacy: 'PUBLIC' | 'PRIVATE' | 'UNLISTED';
  is_draft: boolean;
}>;

// Music.ts
export type MusicSearchFilters = Partial<{
  type: 'all' | 'song' | 'video' | 'album' | 'playlist' | 'artist';
}>;