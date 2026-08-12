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

export interface CreatorVideo {
  videoId: string;
  channelId?: string;
  title?: string;
  description?: string;
  privacy?: 'VIDEO_PRIVACY_PUBLIC' | 'VIDEO_PRIVACY_UNLISTED' | 'VIDEO_PRIVACY_PRIVATE';
  status?: 'VIDEO_STATUS_PROCESSED';
  draftStatus?: 'DRAFT_STATUS_NONE';
  shareUrl?: string;
  watchUrl?: string;
  lengthSeconds?: string;
  videoDurationMs?: number;
  timeCreatedSeconds?: string;
  timePublishedSeconds?: string;
  thumbnailDetails?: { thumbnails: { url: string, width: number, height: number }[] };
};

// [Raw Types]

export interface CreateVideoResponse {
  responseContext: ResponseContext;
  videoId: string;
  contents: Contents;
}

export interface ResponseContext {
  serviceTrackingParams: ServiceTrackingParam[];
  consistencyTokenJar: ConsistencyTokenJar;
  stateTags: StateTags;
  responseId: string;
  webResponseContextExtensionData: WebResponseContextExtensionData;
}

export interface ServiceTrackingParam {
  service: string;
  params: Param[];
}

export interface Param {
  key: string;
  value: string;
}

export interface ConsistencyTokenJar {
  encryptedTokenJarContents: string;
  expirationSeconds: string;
}

export interface StateTags {
  stateTagsModified: number[];
}

export interface WebResponseContextExtensionData {
  hasDecorated: boolean;
  challenge?: { type?: 'CHALLENGE_PROMPT_TYPE_AUTHENTICATE' }
}

export interface Contents {
  uploadFeedbackItemRenderer: UploadFeedbackItemRenderer;
}

export interface UploadFeedbackItemRenderer {
  id: Id;
  continuations: Continuation[];
  dataFreshnessEntity: DataFreshnessEntity;
}

export interface Id {
  frontendUploadId: string;
  videoId: string;
}

export interface Continuation {
  timedContinuationData?: TimedContinuationData;
  uploadFeedbackRefreshContinuation?: UploadFeedbackRefreshContinuation;
}

export interface TimedContinuationData {
  timeoutMs: number;
  continuation: string;
  clickTrackingParams: string;
}

export interface UploadFeedbackRefreshContinuation {
  continuation: string;
  continueInMs: number;
  clickTrackingParams: string;
}

export interface DataFreshnessEntity {
  key: string;
  lastUpdated: LastUpdated;
}

export interface LastUpdated {
  seconds: string;
  nanos: number;
}

// [FeedbackContinuation] ==========================================================

export type ContinuationsUploadFeedback = ContinuationUploadFeedback[];

export interface ContinuationUploadFeedback {
  uploadFeedbackItemContinuation: UploadFeedbackItemContinuation;
}

export interface UploadFeedbackItemContinuation {
  id: Id;
  contents: Content[];
  continuations: Continuation[];
  dataFreshnessEntity: DataFreshnessEntity;
}

export interface Id {
  frontendUploadId: string;
  videoId: string;
}

export interface Content {
  transferProgressBar?: TransferProgressBar;
  uploadChecksRenderer?: UploadChecksRenderer;
}

export interface TransferProgressBar {
  fractionCompleted: number;
  progressMessage: ProgressMessage;
}

export interface ProgressMessage {
  simpleText: string;
}

export interface UploadChecksRenderer {
  checksDataVideoMonetized: ChecksDataVideoMonetized;
  checksDataVideoNotMonetized: ChecksDataVideoNotMonetized;
}

export interface ChecksDataVideoMonetized {
  checksSummary: ChecksSummary;
  copyrightCheck: CopyrightCheck;
  adSuitabilityCheck: AdSuitabilityCheck;
  communityGuidelinesCheck: CommunityGuidelinesCheck;
}

export interface ChecksSummary {
  status: string;
}

export interface CopyrightCheck {
  checkStatus: string;
}

export interface AdSuitabilityCheck {
  checkStatus: string;
}

export interface CommunityGuidelinesCheck {
  checkStatus: string;
}

export interface ChecksDataVideoNotMonetized {
  checksSummary: ChecksSummary2;
  copyrightCheck: CopyrightCheck2;
  adSuitabilityCheck: AdSuitabilityCheck2;
  communityGuidelinesCheck: CommunityGuidelinesCheck2;
}

export interface ChecksSummary2 {
  status: string;
}

export interface CopyrightCheck2 {
  checkStatus: string;
}

export interface AdSuitabilityCheck2 {
  checkStatus: string;
}

export interface CommunityGuidelinesCheck2 {
  checkStatus: string;
}

export interface Continuation {
  timedContinuationData?: TimedContinuationData;
  uploadFeedbackRefreshContinuation?: UploadFeedbackRefreshContinuation;
}

export interface TimedContinuationData {
  timeoutMs: number;
  continuation: string;
  clickTrackingParams: string;
}

export interface UploadFeedbackRefreshContinuation {
  continuation: string;
  continueInMs: number;
  clickTrackingParams: string;
}

export interface DataFreshnessEntity {
  key: string;
  lastUpdated: LastUpdated;
}

export interface LastUpdated {
  seconds: string;
  nanos: number;
}
