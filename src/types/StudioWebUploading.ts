export interface BufferReader {
  total_bytes: number;
  read_chunk: (position: number, length: number) => Promise<Uint8Array>;
};
export interface BufferBase64 {
  base64: string;
};

export interface FileNamedBufferReader {
  file_name: string;
  source: BufferReader;
};

export interface FileNamedBufferReader {
  file_name: string;
  source: BufferReader;
};

export interface FileNamedBufferBase64 {
  file_name: string;
  source: BufferBase64;
};

export type StudioVisibility = 'PUBLIC' | 'UNLISTED' | 'PRIVATE';

export interface UploadVideoDetails {
    title?: string;
    description?: string;
    thumbnail?: FileNamedBufferReader;
    playlists?: string[];
    audience?: 'MADE_FOR_KIDS'|'NOT_MADE_FOR_KIDS';

    paid_promotion?: boolean;
    ai_use?: boolean;

    collaboration_channels?: {
        id: string;
        analytics_setting: 'VIDEO_COLLABORATOR_ANALYTICS_SETTING_NONE'|'VIDEO_COLLABORATOR_ANALYTICS_SETTING_BASIC'
    }[];

    automatic_chapters?: boolean;
    featured_places?: boolean;
    automatic_concepts?: boolean;
    tags?: string[];
    
    video_language?: string;
    caption_certification?: string;
    title_and_description_language?: string;

    recording_date?: Date;
    video_location?: string;

    license?: string;
    allow_embedding?: boolean;
    publish_to_subscriptions_feed_and_notify_subscribers?: boolean;
    shorts_remixing?: 'ALLOW_VIDEO_AND_AUDIO'|'ALLOW_ONLY_AUDIO'|'DONT_ALLOW';
    category?: 'FILM'|'AUTOS'|'MUSIC'|'PETS'|'SPORTS'|'TRAVEL'|'GADGETS'|'PEOPLE'|'COMEDY'|'ENTERTAINMENT'|'NEWS'|'HOWTO'|'EDUCATION'|'SCIENCE'|'GOVERNMENT';

    allow_comments?: 'ON'|'OFF'|'PAUSE';
    comment_moderation?: 'NONE'|'BASIC'|'STRICT'|'HOLD_ALL';
    who_can_comment?: 'ANYONE'|'SUBSCRIBERS_AND_MEMBERS';
    sort_comments_by?: 'TOP'|'NEWEST';
    show_how_many_viewers_like_this_video?: boolean;

    visibility?: StudioVisibility;
    subtitles?: {
        data: FileNamedBufferBase64;
        synced: boolean;
        auto_translate?: boolean;
        overwrite?: boolean;
    };
};