import type { BotGuardLogBinding, BotGuardSessionTokenBinding, BotGuardSolver } from '../../types/BotGuard.js';
import type { FileNamedBufferReader, StudioVisibility, UploadVideoDetails } from '../../types/StudioWebUploading.js';
import type { ICreateCaptionsResponse, ICreateVideoResponse, IMetadataUpdateResponse, IParseCaptionsResponse, IParsedResponse, IUpdateCaptionsResponse } from '../../parser/index.js';
import { Constants, Log } from '../../utils/index.js';
import { InnertubeError, Platform, wait } from '../../utils/Utils.js';
import type { Actions, ParsedResponse, PartialContext, Session } from '../index.js';
import { UploadFeedbackItem } from '../../parser/nodes.js';
import type BotGuardManager from '../managers/BotGuardManager.js';
import type { StudioActionsEngagementType } from '../managers/BotGuardManager.js';
import type { AttIdsRaw } from '../../parser/classes/commands/RunAttestationCommand.js';

type StudioManagedEndpoint =
  | '/globalization/create_captions'
  | '/globalization/parse_captions'
  | '/globalization/update_captions'
  | '/video_manager/metadata_update'
  | '/upload/createvideo'
  | '/upload/feedback'
  | '/video/delete'
  | '/creator/get_creator_videos'
  | '/creator/list_creator_videos'
  | '/creator/list_creator_playlists'
  | '/video_editor/get_audio_waveform_url';

interface ScottyStart { upload_url: string; resource_id?: string };
interface ScottyUploadResult { status?: string; scottyResourceId?: string };
type ScottyProgress = (written_bytes: number, total_bytes: number) => void;
type ScottyUploadType = 'VIDEO' | 'THUMBNAIL';

type UpdateMetadataPayload = Record<string, unknown>;

interface UploadSubtitlesResponse {
  created: ICreateCaptionsResponse;
  parsed: IParseCaptionsResponse;
  updated: IUpdateCaptionsResponse;
}

interface UploadFeedbackResult { contents: UploadFeedbackItem[], next: () => Promise<UploadFeedbackResult | null> };

const TRUE_VIDEO_READ_MASK = {
  metadataLanguage: { all: true },
  notification: { all: true },
  status: true,
  statusDetails: { all: true },
  ownedClaimDetails: { all: true },
  thumbnailDetails: { all: true },
  videoId: true,
  permissions: { all: true },
  origin: true,
  inlineEditProcessingStatus: true,
  monetization: { all: true },
  allRestrictions: { all: true },
  videoPrechecks: { all: true },
  audienceRestriction: { all: true },
  mfkSettings: { all: true },
  selfCertification: { all: true },
  videoStreamUrl: true,
  visibility: { all: true },
  shorts: { all: true },
  responseStatus: { all: true },
  contentType: true,
  channelId: true,
  features: { all: true },
  draftStatus: true,
  brandDealVideoLink: { all: true },
  activeBrandDealVideoLinks: { all: true },
  audioLanguage: { all: true },
  videoAdvertiserSpecificAgeGates: { all: true },
  claimDetails: { all: true },
  commentsDisabledInternally: true,
  livestream: { all: true },
  music: { all: true },
  premiere: { all: true },
  timePublishedSeconds: true,
  uncaptionedReason: true,
  remix: { all: true },
  contentOwnershipModelSettings: { all: true },
  creatorInitiatedVideoChannelLinks: { all: true },
  releaseInfo: { all: true },
  podcastRssMetadata: { all: true },
  googleAdsVideoLinks: { all: true },
  alteredContentSettings: { all: true },
  collaboration: { all: true },
  videoResolutions: { all: true },
  publicLivestream: { all: true },
  publicPremiere: { all: true },
  thumbnailEditorState: { all: true },
  title: true,
  videoCreatorExperiment: { all: true },
  lengthSeconds: true,
  tvfilmMetadata: { all: true },
  privacy: true,
  shareUrl: true,
  scheduledPublishingDetails: { all: true },
  privateShare: { all: true },
  sponsorsOnly: { all: true },
  superfansOnly: { all: true },
  unlistedExpired: true,
  videoTrailers: { all: true },
  isPaygated: true,
  suggestions: { all: true },
  tvType: { all: true },
  genres: { all: true },
  episode: { all: true },
  titleDetails: { all: true },
  copyrightSummary: { all: true },
  productSelection: { all: true },
  productAutotaggingSettings: { all: true },
  videoLinkageShortsAttribution: { all: true },
  academicLearning: { all: true },
  allowEmbed: true,
  allowRatings: true,
  ageRestriction: true,
  category: true,
  commentFilter: true,
  commentSettings: { all: true },
  crowdsourcingEnabled: true,
  dateRecorded: { all: true },
  defaultCommentSortOrder: true,
  description: true,
  descriptionFormattedString: { all: true },
  gameTitle: { all: true },
  license: true,
  liveChat: { all: true },
  location: { all: true },
  paidProductPlacement: true,
  paidPoliticalContent: { all: true },
  publishing: { all: true },
  tags: { all: true },
  titleFormattedString: { all: true },
  videoDurationMs: true,
  viewCountIsHidden: true,
  autoChapterSettings: { all: true },
  autoPlacesMentionedSettings: { all: true },
  videoArtworkEditorState: { all: true },
  learningConceptSettings: { all: true },
  videoEditorProject: { videoDimensions: { all: true } },
  originalFilename: true,
  timeCreatedSeconds: true,
  files: { all: true },
  adSettings: { all: true },
  monetizedStatus: true,
  serializedShareEntity: true,
  publicMetrics: { all: true }
};

const TRUE_PLAYLIST_READ_MASK = {
  artworkEditorState: { all: true },
  attributionData: { all: true },
  channelId: true,
  commentCount: true,
  courseMetadata: { all: true },
  creationFlow: true,
  description: true,
  genres: { all: true },
  isSeries: true,
  key: true,
  lastTimeUpdated: { all: true },
  playlistId: true,
  playlistItemVoting: { all: true },
  playlistPermissions: { all: true },
  playlistThumbnail: { all: true },
  podcastMetadata: { all: true },
  responseStatus: { all: true },
  showMetadata: { all: true },
  status: true,
  timestamps: { all: true },
  title: true,
  translationData: { all: true },
  tvfilmMetadata: { all: true },
  videoOrder: true,
  videosCount: true,
  viewCount: true,
  visibilitySetting: true,
  watchUrl: true
};

const CREATOR_VIDEO_CATEGORY_IDS = {
  FILM: 1, AUTOS: 2, MUSIC: 10, PETS: 15, SPORTS: 17, TRAVEL: 19, GADGETS: 20,
  PEOPLE: 22, COMEDY: 23, ENTERTAINMENT: 24, NEWS: 25, HOWTO: 26, EDUCATION: 27,
  SCIENCE: 28, GOVERNMENT: 29
} as const;
const ALLOW_COMMENT_MODES = {
  NONE: 'ALL_COMMENTS',
  BASIC: 'AUTOMATED_COMMENTS',
  STRICT: 'AUTO_MODERATED_COMMENTS_HOLD_MORE',
  HOLD_ALL: 'APPROVED_COMMENTS'
} as const;
const COMMENT_ENABLED_STATES = {
  ON: 'MDE_COMMENT_ENABLED_STATE_ON',
  OFF: 'MDE_COMMENT_ENABLED_STATE_OFF',
  PAUSE: 'MDE_COMMENT_ENABLED_STATE_PAUSED'
} as const;
const ALLOWED_COMMENTER_MODES = {
  ANYONE: 'MDE_ALLOWED_COMMENTER_MODE_ANYONE',
  SUBSCRIBERS_AND_MEMBERS: 'MDE_ALLOWED_COMMENTER_MODE_SUBSCRIBERS_MEMBERS_APPROVED_USERS'
} as const;
const COMMENT_SORT_ORDERS = {
  TOP: 'MDE_COMMENT_SORT_ORDER_TOP',
  NEWEST: 'MDE_COMMENT_SORT_ORDER_LATEST'
} as const;
const REMIX_SOURCE_OPTIONS = {
  ALLOW_VIDEO_AND_AUDIO: 'MDE_REMIX_SOURCE_OPTION_OPT_IN',
  ALLOW_ONLY_AUDIO: 'MDE_REMIX_SOURCE_OPTION_VISUAL_OPT_OUT_AND_PERFORM_ACTIONS',
  DONT_ALLOW: 'MDE_REMIX_SOURCE_OPTION_OPT_OUT_AND_MUTE_DERIVATIVES'
} as const;

const UPLOAD_TYPES_TO_START_URL: Record<ScottyUploadType, string> = {
  VIDEO: Constants.URLS.YT_UPLOAD_VIDEO_WEB,
  THUMBNAIL: Constants.URLS.YT_UPLOAD_THUMBNAIL_WEB
} as const; 

export default class StudioWeb {
  #session: Session;
  #actions: Actions;
  
  #channel_id: string;
  #botguard: BotGuardManager;
  #botguard_solver: BotGuardSolver<BotGuardSessionTokenBinding|BotGuardLogBinding>;
  
  #auto_retry: boolean;
  #session_token_cache: string | null;

  constructor(session: Session, botguard: BotGuardManager, botguard_solver: BotGuardSolver<BotGuardSessionTokenBinding|BotGuardLogBinding>, channel_id: string) {
    this.#session = session;
    this.#actions = session.actions;

    this.#channel_id = channel_id;
    this.#botguard = botguard;
    this.#botguard_solver = botguard_solver;

    this.#auto_retry = true;
    this.#session_token_cache = null;
    if (!session.logged_in)
      throw new InnertubeError('You must be signed in to use this client.');
  }

  setAutoRetrying(auto_retry: boolean) {
    this.#auto_retry = auto_retry;
  }

  async #getBotGuardAttestation(engagement_type: StudioActionsEngagementType, ids: AttIdsRaw[]) {
    return this.#botguard.studioAttestationResponseData(this.#botguard_solver, engagement_type, ids, this.#channel_id);
  }

  #clearSessionTokenCache() {
    this.#session_token_cache = null;
    this.#botguard.clearStudioContextConfigCache();
  }

  async getSessionToken(): Promise<string> {
    if (this.#session_token_cache) return this.#session_token_cache;
    const session_token = await this.#botguard.studioSessionToken(this.#botguard_solver, this.#channel_id);
    this.#session_token_cache = session_token;
    return session_token;
  }

  #scottyHeaders(file_name: string): Record<string, string> {
    if (!this.#session.cookie) throw new InnertubeError('Unable to produce scottyHeaders with cookies');
    return {
      'Cookie': this.#session.cookie,
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Origin': Constants.URLS.YT_STUDIO_WEB_BASE,
      'Referer': `${Constants.URLS.YT_STUDIO_WEB_BASE}/`,
      'User-Agent': Constants.CLIENTS['WEB_CREATOR'].USER_AGENT,
      'x-goog-upload-file-name': encodeURIComponent(file_name)
    };
  }

  async #scottyStart(start_upload_url: string, file_name_buffer_reader: FileNamedBufferReader, start_payload: object): Promise<ScottyStart> {
    if (file_name_buffer_reader.source.total_bytes <= 0) throw new InnertubeError('Can\'t upload an empty file to scotty');

    const start_response = await fetch(`${start_upload_url}?authuser=0`, {
      method: 'POST',
      headers: {
        ...this.#scottyHeaders(file_name_buffer_reader.file_name),
        'x-goog-upload-command': 'start',
        'x-goog-upload-header-content-length': String(file_name_buffer_reader.source.total_bytes),
        'x-goog-upload-protocol': 'resumable'
      },
      referrer: Constants.URLS.YT_STUDIO_WEB_BASE,
      body: JSON.stringify(start_payload)
    });
    const upload_url = start_response.headers.get('x-goog-upload-url');
    if (upload_url === null || upload_url === '') throw new InnertubeError('Scotty did not return an upload url');

    const resource_id = start_response.headers.get('x-goog-upload-header-scotty-resource-id');

    return { upload_url, resource_id: !resource_id ? undefined : resource_id };
  }

  async #scottyUploadChunks(upload_url: string, file_name_buffer_reader: FileNamedBufferReader, on_progress?: ScottyProgress): Promise<{ resource_id?: string }> {
    const UPLOAD_CHUNK_SIZE_BYTES = 100 * 1024 * 1024;

    let offset = 0;
    while (offset < file_name_buffer_reader.source.total_bytes) {
      const chunk = await file_name_buffer_reader.source.read_chunk(offset, Math.min(UPLOAD_CHUNK_SIZE_BYTES, file_name_buffer_reader.source.total_bytes - offset));
      if (chunk.byteLength === 0) throw new InnertubeError('Ran out of bytes before scotty finalized the upload');

      const is_final = offset + chunk.byteLength >= file_name_buffer_reader.source.total_bytes;
      const chunk_response = await fetch(upload_url, {
        method: 'POST',
        headers: {
          ...this.#scottyHeaders(file_name_buffer_reader.file_name),
          'x-goog-upload-command': is_final ? 'upload, finalize' : 'upload',
          'x-goog-upload-offset': String(offset)
        },
        body: chunk as BodyInit
      });
      if (!chunk_response.ok) throw new InnertubeError('Unable to upload a chunk of the buffer to scotty');

      offset += chunk.byteLength;
      on_progress?.(offset, file_name_buffer_reader.source.total_bytes);
      if (!is_final) {
        await chunk_response.body?.cancel();
        continue;
      }

      const result = await chunk_response.json() as ScottyUploadResult;
      if (result.status !== 'STATUS_SUCCESS') throw new InnertubeError('Scotty did not finalize the upload');
      return { resource_id: result.scottyResourceId };
    }
    throw new InnertubeError('Scotty upload loop ended without finalizing');
  }

  async #uploadToScotty(upload_type: ScottyUploadType, file_name_buffer_reader: FileNamedBufferReader, start_payload: object, on_progress?: ScottyProgress): Promise<string> {
    const start = await this.#scottyStart(UPLOAD_TYPES_TO_START_URL[upload_type], file_name_buffer_reader, start_payload);
    const uploaded = await this.#scottyUploadChunks(start.upload_url, file_name_buffer_reader, on_progress);
    const resource_id = start.resource_id ?? uploaded.resource_id;
    if (!resource_id) throw new InnertubeError('Scotty did not return a resource id');
    return resource_id;
  }

  async #uploadThumbnailResource(file_name_buffer_reader: FileNamedBufferReader): Promise<string> {
    return await this.#uploadToScotty('THUMBNAIL', file_name_buffer_reader, {});
  }

  async managedExecute<T extends StudioManagedEndpoint>(endpoint: T, payload: object, request_context?: PartialContext['request'], is_retry = false): Promise<ParsedResponse<T>> {
    const { user_one_time_context } = await this.#botguard.studioContextConfig(this.#channel_id);

    const data = await this.#actions.execute(endpoint, {
      client: 'WEB_CREATOR',
      parse: true,
      one_time_context: { user: user_one_time_context.user, request: { ...request_context, sessionInfo: { token: await this.getSessionToken() } } },
      ...payload
    }) as IParsedResponse;

    if (data.challenge_prompt?.type === 'CHALLENGE_PROMPT_TYPE_AUTHENTICATE') {
      if (!is_retry && this.#auto_retry) {
        this.#clearSessionTokenCache();
        return await this.managedExecute<T>(endpoint, payload, request_context, true);
      }
      throw new InnertubeError('YouTube Studio is requesting an authentication challenge, likely a stale session token');
    }
    return data as ParsedResponse<T>;
  }

  async uploadSubtitles(video_id: string, subtitles: NonNullable<UploadVideoDetails['subtitles']>, language = 'en-US'): Promise<UploadSubtitlesResponse> {
    const data_base64 = await subtitles.data.source.base64;
    const data_uri = `data:application/octet-stream;base64,${data_base64}`;
    const tts_track_id = { lang: language, kind: '', name: '' };

    const created = await this.managedExecute('/globalization/create_captions', {
      videoId: video_id,
      channelId: this.#channel_id,
      newTrack: tts_track_id,
      overwrite: subtitles.overwrite ?? true,
      autoTranslate: subtitles.auto_translate ?? false
    });

    const content_update_time = created.translation?.captions_translations?.[0]?.content_update_time;
    if (content_update_time === undefined) throw new InnertubeError('create_captions did not return a contentUpdateTime');

    const parsed = await this.managedExecute('/globalization/parse_captions', {
      fileType: subtitles.synced ? 'CAPTIONS_FILE_TYPE_TIMED_TEXT' : 'CAPTIONS_FILE_TYPE_TRANSCRIPT',
      fileName: subtitles.data.file_name,
      dataUri: data_uri
    });

    const updated = await this.managedExecute('/globalization/update_captions', {
      videoId: video_id,
      channelId: this.#channel_id,
      operations: [
        {
          ttsTrackId: tts_track_id,
          userIntent: 'USER_INTENT_EDIT_LATEST_DRAFT',
          vote: 'VOTE_PUBLISH',
          isContentEdited: false,
          contentUpdateTime: content_update_time,
          captionsFile: { dataUri: data_uri, fileName: subtitles.data.file_name }
        }
      ]
    });
    return { created, parsed, updated };
  }
  #isNumberString(value: string): boolean {
    return !!value && !isNaN(Number(value));
  }

  #buildCommentOptions(details: Partial<UploadVideoDetails>): UpdateMetadataPayload | undefined {
    const enabled_state = details.allow_comments === undefined ? undefined : COMMENT_ENABLED_STATES[details.allow_comments];
    const has_options = enabled_state !== undefined
      || details.sort_comments_by !== undefined
      || details.show_how_many_viewers_like_this_video !== undefined
      || details.comment_moderation !== undefined
      || details.who_can_comment !== undefined;
    if (!has_options) return undefined;

    const comment_options: UpdateMetadataPayload = {};
    if (enabled_state !== undefined) comment_options.newCommentEnabledState = enabled_state;
    if (details.sort_comments_by !== undefined) comment_options.newDefaultSortOrder = COMMENT_SORT_ORDERS[details.sort_comments_by];
    if (details.show_how_many_viewers_like_this_video !== undefined) comment_options.newCanViewRatings = details.show_how_many_viewers_like_this_video;
    if (enabled_state === undefined || enabled_state === COMMENT_ENABLED_STATES.ON) {
      if (details.comment_moderation !== undefined) comment_options.newAllowCommentsMode = ALLOW_COMMENT_MODES[details.comment_moderation];
      if (details.who_can_comment !== undefined) comment_options.newAllowedCommenterMode = ALLOWED_COMMENTER_MODES[details.who_can_comment];
    }
    return comment_options;
  }

  #buildMetadataUpdate(details: UploadVideoDetails, thumbnail_resource_id?: string): UpdateMetadataPayload {
    const payload: UpdateMetadataPayload = {};

    if (details.title !== undefined) payload.title = { newTitle: details.title, titleOperation: 'MDE_TEXT_UPDATE_OPERATION_SET' };
    if (details.description !== undefined) payload.description = { newDescription: details.description, descriptionOperation: 'MDE_TEXT_UPDATE_OPERATION_SET' };
    if (details.tags !== undefined) payload.tags = { newTags: details.tags };
    if (details.playlists !== undefined) payload.addToPlaylist = { addToPlaylistIds: details.playlists, deleteFromPlaylistIds: [] };
    if (details.hide_hashtag_suggestions !== undefined) payload.suggestionMetadata = { hideHashtagSuggestions: details.hide_hashtag_suggestions };
    if (details.audience !== undefined) {
      payload.madeForKids = details.audience === 'UNSET'
        ? { operation: 'MDE_MADE_FOR_KIDS_UPDATE_OPERATION_CLEAR' }
        : {
          operation: 'MDE_MADE_FOR_KIDS_UPDATE_OPERATION_SET',
          newMfk: details.audience === 'MADE_FOR_KIDS' ? 'MDE_MADE_FOR_KIDS_TYPE_MFK' : 'MDE_MADE_FOR_KIDS_TYPE_NOT_MFK'
        };
    }
    if (details.targeted_audience !== undefined) {
      payload.targetedAudience = details.targeted_audience === 'UNSET'
        ? { operation: 'MDE_TARGETED_AUDIENCE_UPDATE_OPERATION_CLEAR' }
        : { operation: 'MDE_TARGETED_AUDIENCE_UPDATE_OPERATION_SET', newTargetedAudience: `MDE_TARGETED_AUDIENCE_TYPE_${details.targeted_audience}` };
    }
    if (details.age_restriction !== undefined) {
      payload.racy = {
        operation: 'MDE_RACY_UPDATE_OPERATION_SET',
        newRacy: details.age_restriction ? 'MDE_RACY_TYPE_RESTRICTED' : 'MDE_RACY_TYPE_NOT_RESTRICTED'
      };
    }
    if (details.paid_promotion !== undefined || details.paid_political_content !== undefined) {
      const product_placement: UpdateMetadataPayload = {};
      if (details.paid_promotion !== undefined) {
        product_placement.newHasPaidProductPlacement = details.paid_promotion;
        product_placement.newShowPaidProductPlacementOverlay = details.paid_promotion;
        product_placement.newIsPaidProductPlacementSelfDeclaredDefinitive = true;
      }
      if (details.paid_political_content !== undefined) product_placement.newHasPaidPoliticalContent = details.paid_political_content;
      payload.productPlacement = product_placement;
    }
    if (details.ai_use !== undefined) {
      payload.alteredContent = {
        operation: 'MDE_ALTERED_CONTENT_UPDATE_OPERATION_SET',
        newCreatorDisclosedHasAlteredContent: details.ai_use ? 'MDE_HAS_ALTERED_CONTENT_YES' : 'MDE_HAS_ALTERED_CONTENT_NO'
      };
    }

    if (details.collaboration_channels) {
      payload.collaboration = {
        inviteCollaborators: details.collaboration_channels.map((channel) => ({ externalChannelId: channel.id, analyticsSetting: channel.analytics_setting }))
      };
    }

    if (details.automatic_chapters !== undefined) payload.autoChapter = { creatorOptOut: !details.automatic_chapters };
    if (details.featured_places !== undefined) payload.autoPlaces = { creatorOptOut: !details.featured_places };
    if (details.automatic_concepts !== undefined) payload.learningConcepts = { autoConceptsCreatorOptOut: !details.automatic_concepts };
    if (details.automatic_summary !== undefined) payload.autoSummary = { creatorOptOut: !details.automatic_summary };
    if (details.automatic_products !== undefined) payload.autoProducts = { creatorOptOut: !details.automatic_products };
    if (details.show_view_count !== undefined) payload.viewCountIsHidden = { hidden: !details.show_view_count };
    if (details.allow_audio_only_use !== undefined) payload.music = { newIsLicensedForYoutubeMusic: details.allow_audio_only_use };

    if (details.video_language !== undefined) payload.audioLanguage = { newAudioLanguage: details.video_language };
    if (details.title_and_description_language !== undefined) payload.metadataLanguage = { newMetadataLanguage: details.title_and_description_language };
    if (details.caption_certification !== undefined) payload.captionsCertificate = { newUncaptionedReason: details.caption_certification };

    if (details.recording_date === null) {
      payload.recordedDate = { operation: 'MDE_RECORDED_DATE_UPDATE_OPERATION_CLEAR' };
    } else if (details.recording_date !== undefined) {
      payload.recordedDate = {
        operation: 'MDE_RECORDED_DATE_UPDATE_OPERATION_SET',
        newRecordedDate: {
          year: details.recording_date.getFullYear(),
          month: details.recording_date.getMonth() + 1,
          day: details.recording_date.getDate()
        }
      };
    }
    if (details.video_location === null) {
      payload.location = { operation: 'MDE_LOCATION_UPDATE_OPERATION_REMOVE_LOCATION' };
    } else if (details.video_location !== undefined) {
      payload.location = { operation: 'MDE_LOCATION_UPDATE_OPERATION_SET_LOCATION', description: details.video_location };
    }

    if (details.license !== undefined) payload.license = { newLicenseId: details.license };
    if (details.allow_embedding !== undefined) payload.distributionOptions = { newAllowEmbedding: details.allow_embedding };
    if (details.publish_to_subscriptions_feed_and_notify_subscribers !== undefined) {
      payload.publishingOptions = { newPostToFeed: details.publish_to_subscriptions_feed_and_notify_subscribers };
    }
    if (details.shorts_remixing !== undefined) {
      payload.remix = { operation: 'MDE_REMIX_UPDATE_OPERATION_SET', newRemixSourceOption: REMIX_SOURCE_OPTIONS[details.shorts_remixing] };
    }
    if (details.category !== undefined) {
      const category_id = this.#isNumberString(details.category) ? Number(details.category) : CREATOR_VIDEO_CATEGORY_IDS[details.category.toUpperCase() as keyof typeof CREATOR_VIDEO_CATEGORY_IDS];
      if (category_id !== undefined) payload.category = { newCategoryId: category_id };
    }

    if (details.visibility) {
      payload.privacyState = { newPrivacy: details.visibility };
    }

    const comment_options = this.#buildCommentOptions(details);
    if (comment_options !== undefined) payload.commentOptions = comment_options;

    if (thumbnail_resource_id !== undefined) {
      payload.videoStill = {
        operation: 'UPLOAD_CUSTOM_THUMBNAIL',
        image: {
          encryptedScottyResourceId: thumbnail_resource_id,
          name: 'CUSTOM_THUMBNAIL_IMAGE_NAME_DEFAULT',
          format: 'CUSTOM_THUMBNAIL_IMAGE_FORMAT_JPEG'
        }
      };
    }

    return payload;
  }

  async #updateMetadata(video_id: string, payload: UpdateMetadataPayload, video_read_mask: Partial<typeof TRUE_VIDEO_READ_MASK> = TRUE_VIDEO_READ_MASK): Promise<IMetadataUpdateResponse> {
    const attestation_response_data = await this.#getBotGuardAttestation('ENGAGEMENT_TYPE_VIDEO_METADATA_UPDATE', [ { encryptedVideoId: video_id } ]);
    return await this.managedExecute('/video_manager/metadata_update', {
      attestationResponseData: attestation_response_data,
      encryptedVideoId: video_id,
      videoReadMask: video_read_mask,
      flowType: 'MDE_FLOW_TYPE_UPLOAD',
      ...payload
    });
  }

  async updateVideo(video_id: string, details: Partial<UploadVideoDetails>, video_read_mask: Partial<typeof TRUE_VIDEO_READ_MASK> = TRUE_VIDEO_READ_MASK) {
    let thumbnail_resource_id: string | undefined;
    if (details.thumbnail !== undefined) {
      const resource_id = await this.#uploadThumbnailResource(details.thumbnail);
      thumbnail_resource_id = resource_id;
    }

    const payload = this.#buildMetadataUpdate(details, thumbnail_resource_id);

    let update_metadata_response: IMetadataUpdateResponse | null = null;
    let update_subtitles_response: UploadSubtitlesResponse | null = null;

    if (Object.keys(payload).length > 0) {
      update_metadata_response = await this.#updateMetadata(video_id, payload, video_read_mask);
    }
    if (details.subtitles !== undefined) {
      update_subtitles_response = await this.uploadSubtitles(video_id, details.subtitles, details.video_language);
    }
    return { update_metadata_response, update_subtitles_response };
  }

  async publishVideo(video_id: string, visibility: StudioVisibility = 'PRIVATE', video_read_mask: Partial<typeof TRUE_VIDEO_READ_MASK> = TRUE_VIDEO_READ_MASK) {
    const update_metadata_response = await this.#updateMetadata(video_id, {
      privacyState: { newPrivacy: visibility },
      draftState: { operation: 'MDE_DRAFT_STATE_UPDATE_OPERATION_REMOVE_DRAFT_STATE' }
    }, video_read_mask);
    return update_metadata_response;
  }

  // from https://studio.youtube.com/youtubei/v1/creator/get_channel_dashboard?alt=json under interactionRecordingParams; likely useless
  async uploadFeedback(tokens: string[], type: 'FEEDBACK_TOKENS'): Promise<{ isProcessed: boolean }>
  // initial from createvideo under uploadFeedbackRefreshContinuation
  async uploadFeedback(tokens: string[], type: 'CONTINUATION_TOKENS'): Promise<UploadFeedbackResult>
  async uploadFeedback(tokens: string[], type: 'FEEDBACK_TOKENS' | 'CONTINUATION_TOKENS'): Promise<{ isProcessed: boolean } | UploadFeedbackResult | null> {
    if (tokens.filter((token) => token).length === 0) return null;
    const feedback_data = await this.managedExecute('/upload/feedback',
      type === 'CONTINUATION_TOKENS' ? { continuations: tokens } : { feedbackTokens: tokens });
    try {
      if (type === 'FEEDBACK_TOKENS') return feedback_data.feedback_responses?.[0] as { isProcessed: boolean };
      const contents = (feedback_data.continuation_contents_array ?? []) as UploadFeedbackItem[];
      return {
        contents, next: async () => await this.uploadFeedback([
          contents[0]?.as(UploadFeedbackItem)?.continuation_token ?? ''
        ], 'CONTINUATION_TOKENS')
      };
    } catch (_) {
      return null;
    }
  }

  async uploadFeedbackCycle(initial_tokens: (string | null)[], callback_continue: (content: UploadFeedbackItem[]) => boolean) {
    if (initial_tokens.some((token) => token === null)) return;
    let feedback: null | UploadFeedbackResult = await this.uploadFeedback(initial_tokens as string[], 'CONTINUATION_TOKENS');
    if (feedback === null) return;
    do {
      try {
        if (!callback_continue(feedback.contents)) break;
        const delay = feedback.contents[0]?.continuation_delay_ms ?? null;
        if (delay === null) {
          Log.warn('upload feedback delay is null; exiting for safety');
          break;
        }
        if (delay < 1000) {
          Log.warn('upload feedback delay is unusually low; exiting for safety');
          break;
        }
        await wait(delay);
      } catch (e) {
        const error = e as Error;
        Log.warn(error.message);
      }
    }
    while ((feedback = await feedback.next()) !== null);
  }

  async uploadVideo(file: FileNamedBufferReader, details: Partial<UploadVideoDetails> = {}, 
    on_scotty_progress?: (written_bytes: number, total_bytes: number) => void, on_initial_create_video?: (full_created: { created: ICreateVideoResponse, feedback_token: string | null }) => any, 
    video_read_mask: Partial<typeof TRUE_VIDEO_READ_MASK> = TRUE_VIDEO_READ_MASK) {
    
    const frontend_upload_id = `innertube_studio:${Platform.shim.uuidv4().toUpperCase()}:0`;
    const start = await this.#scottyStart(UPLOAD_TYPES_TO_START_URL['VIDEO'], file, { frontendUploadId: frontend_upload_id });

    const chunks_uploaded = this.#scottyUploadChunks(start.upload_url, file, on_scotty_progress);

    if (!start.resource_id) throw new InnertubeError('Scotty didn\'t resolve a resource ID');

    const attestation_response_data = await this.#getBotGuardAttestation('ENGAGEMENT_TYPE_VIDEO_UPLOAD', [ { scottyResourceId: start.resource_id } ]);

    const created = await this.managedExecute('/upload/createvideo', {
      channelId: this.#channel_id,
      resourceId: { scottyResourceId: { id: start.resource_id } },
      frontendUploadId: frontend_upload_id,
      initialMetadata: {
        title: { newTitle: details.title ?? file.file_name },
        privacy: { newPrivacy: 'PRIVATE' },
        draftState: { isDraft: true },
        ...(details.tags === undefined ? {} : { tags: { newTags: details.tags } }),
        targetedAudience: {
          operation: 'MDE_TARGETED_AUDIENCE_UPDATE_OPERATION_SET',
          newTargetedAudience: 'MDE_TARGETED_AUDIENCE_TYPE_ALL'
        }
      },
      contentLevelProtection: { enableRequiresContentLevelProtection: false },
      presumedShort: false
    }, { attestationResponseData: attestation_response_data });

    on_initial_create_video?.({ created, feedback_token: created.contents?.item()?.as(UploadFeedbackItem).continuation_token ?? null });

    const video_id = created.video_id;
    if (video_id === undefined || video_id === '') {
      await chunks_uploaded;
      throw new InnertubeError('createvideo did not return a videoId');
    }

    await chunks_uploaded;

    const { title: _title, tags: _tags, visibility, ...remaining_details } = details;
    const updated = await this.updateVideo(video_id, remaining_details, video_read_mask);

    const published = await this.publishVideo(video_id, visibility, video_read_mask);

    return { created, updated, published };
  }

  async deleteVideo(video_id: string) {
    const deletion_response = await this.managedExecute('/video/delete', { videoId: video_id });
    return deletion_response.success ?? false;
  }

  async getCreatorVideos(video_ids: string[], video_read_mask: Partial<typeof TRUE_VIDEO_READ_MASK> = TRUE_VIDEO_READ_MASK) {
    const creator_videos = await this.managedExecute('/creator/get_creator_videos', {
      failOnError: true,
      videoIds: video_ids,
      mask: video_read_mask,
      criticalRead: false
    });
    return creator_videos.videos ?? [];
  }

  async listCreatorVideos(args: {
    page_token?: string;
    order?: string;
    page_size?: number;
    video_read_mask?: Partial<typeof TRUE_VIDEO_READ_MASK>;
  }) {
    args.order ??= 'VIDEO_ORDER_DISPLAY_TIME_DESC';
    args.page_size ??= 32;
    args.video_read_mask ??= TRUE_VIDEO_READ_MASK;

    return await this.managedExecute('/creator/list_creator_videos', {
      filter: {
        and: {
          operands: [
            { channelIdIs: { value: this.#channel_id } },
            { and: { operands: [ { videoOriginIs: { value: 'VIDEO_ORIGIN_UPLOAD' } }, 
              { not: { operand: { contentTypeIs: { value: 'CREATOR_CONTENT_TYPE_SHORTS' } } } } ] } },
            { not: { operand: { tvfilmTypeIs: { value: 'VIDEO_TVFILM_TYPE_MOVIE' } } } },
            { not: { operand: { tvfilmTypeIs: { value: 'VIDEO_TVFILM_TYPE_EPISODE' } } } },
            { not: { operand: { tvfilmTypeIs: { value: 'VIDEO_TVFILM_TYPE_EVENT' } } } }
          ]
        }
      },
      order: args.order,
      pageSize: args.page_size,
      mask: args.video_read_mask,
      ...(args.page_token === undefined ? {} : { pageToken: args.page_token })
    });
  }

  async listCreatorPlaylists(channel_id: string, args: {
    page_token?: string;
    page_size?: number;
    member_video_ids?: string[];
    playlist_read_mask?: Partial<typeof TRUE_PLAYLIST_READ_MASK>;
  }) {
    args.page_size ??= 500;
    args.member_video_ids ??= [];
    args.playlist_read_mask ??= TRUE_PLAYLIST_READ_MASK;

    return this.managedExecute('/creator/list_creator_playlists', {
      channelId: channel_id,
      delegationContext: {
        externalChannelId: channel_id,
        roleType: {
          channelRoleType: 'CREATOR_CHANNEL_ROLE_TYPE_OWNER'
        }
      },
      pageSize: args.page_size,
      memberVideoIds: args.member_video_ids,
      mask: args.playlist_read_mask,
      ...(args.page_token === undefined ? {} : { pageToken: args.page_token })
    });
  }

  async getAudioWaveformUrl(video_id: string, scale_ms = 770) {
    const response = await this.managedExecute('/video_editor/get_audio_waveform_url', {
      externalVideoId: video_id,
      scaleMs: scale_ms
    });
    return response.audio_waveform_url;
  }
}
