import type { BotGuardChallenge, BotGuardSolver } from '../../types/BotGuard.js';
import type { EngagementType } from '../../types/Misc.js';
import type { ContinuationsUploadFeedback, CreateVideoResponse, CreatorVideo, FileNamedBufferReader, StudioVisibility, UploadVideoDetails } from '../../types/StudioWebUploading.js';
import { Constants, Log } from '../../utils/index.js';
import { InnertubeError, Platform, wait } from '../../utils/Utils.js';
import type { Actions, Session } from '../index.js';

type AttestationPlacement = 'none' | 'context' | 'top_level';

interface BotGuardAttestationResponse {
  challenge: string;
  webResponse: string;
};

interface StudioUnboundChallenge {
  bg_challenge: BotGuardChallenge;
  challenge: string;
  eats: string;
  expires_at_ms: number;
  result?: string;
};

interface StudioBotguardData {
  interpreter_url: string;
  program: string;
};

interface StudioCreatorStudioChallenge {
  botguard_data: StudioBotguardData;
  challenge: string;
  eats: string;
};

interface StudioSessionTokenCache {
  session_token: string;
  expires_at_ms: number;
};

interface ScottyStart { upload_url: string; resource_id?: string };
interface ScottyUploadResult { status?: string; scottyResourceId?: string };
type ScottyProgress = (written_bytes: number, total_bytes: number) => void;
type ScottyUploadType = 'VIDEO' | 'THUMBNAIL';

interface StudioChallengeResponseContext {
  responseContext?: { webResponseContextExtensionData?: { challenge?: { type?: 'CHALLENGE_PROMPT_TYPE_AUTHENTICATE' } } };
}

interface CreateCaptionsResponse { translation?: { captionsTranslations?: { contentUpdateTime?: string }[] } };
interface ParseCaptionsResponse { captionSegments?: object }
interface UpdateCaptionsResponse { framework_updates?: object }

interface MetadataUpdateResponse { videos?: CreatorVideo[] };
type UpdateMetadataPayload = Record<string, unknown>;

interface UploadSubtitlesResponse {
  created: CreateCaptionsResponse;
  parsed: ParseCaptionsResponse;
  updated: UpdateCaptionsResponse;
}

interface UploadFeedbackResult { contents: ContinuationsUploadFeedback, next: () => Promise<UploadFeedbackResult | null> };

const VIDEO_READ_MASK = {
  videoId: true,
  channelId: true,
  title: true,
  description: true,
  privacy: true,
  status: true,
  draftStatus: true,
  shareUrl: true,
  lengthSeconds: true,
  videoDurationMs: true,
  timeCreatedSeconds: true,
  timePublishedSeconds: true,
  thumbnailDetails: { all: true },
  responseStatus: { all: true },
  statusDetails: { all: true }
} as const;

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
  #botguard_solver: BotGuardSolver<string>|null;
  #unbound_challenge_cache: StudioUnboundChallenge|undefined;
  #auto_retry: boolean;
  #force_refresh_session_token: boolean;
  #channel_id_session_token_cache: StudioSessionTokenCache | null;

  constructor(session: Session, channel_id: string) {
    this.#session = session;
    this.#actions = session.actions;
    this.#channel_id = channel_id;
    this.#botguard_solver = null;
    this.#auto_retry = true;
    this.#force_refresh_session_token = false;
    this.#channel_id_session_token_cache = null;
    if (!session.logged_in)
      throw new InnertubeError('You must be signed in to use this client.');
  }

  setBotGuardSolver(botguard_solver: BotGuardSolver<string>) {
    this.#botguard_solver = botguard_solver;
  }
  setAutoRetrying(auto_retry: boolean) {
    this.#auto_retry = auto_retry;
  }

  async #attGet(engagement_type: EngagementType, ids?: Record<string, any>[], eats?: string) {
    const payload: Record<string, any> = {
      engagementType: engagement_type
    };

    if (ids) payload.ids = ids;

    return this.#actions.execute('/att/get', { client: 'WEB_CREATOR', parse: true, ...payload, ...(eats ? { eats } : {}) });
  }

  #challengeExpiryAtMs(challenge?: string): number {
    if (challenge === undefined) return Date.now();
    const params = new URLSearchParams(challenge);
    const issued_seconds = Number(params.get('c'));
    const ttl_seconds = Number(params.get('t'));
    if (isNaN(issued_seconds) || isNaN(ttl_seconds) || issued_seconds === 0) return Date.now();
    return (issued_seconds + ttl_seconds) * 1000;
  }

  async #getUnboundChallenge(): Promise<StudioUnboundChallenge> {
    if (this.#unbound_challenge_cache !== undefined && this.#unbound_challenge_cache.expires_at_ms > Date.now()) return this.#unbound_challenge_cache;
    const unbound_challenge = await this.#attGet('ENGAGEMENT_TYPE_UNBOUND');

    if (!unbound_challenge.eats) throw new InnertubeError('Unbound challenge missing "eats"');
    if (!unbound_challenge.challenge) throw new InnertubeError('Unbound challenge missing "challenge"');
    if (!unbound_challenge.bg_challenge) throw new InnertubeError('Unbound challenge missing "bg_challenge"');

    this.#unbound_challenge_cache = { 
      bg_challenge: {
        ...unbound_challenge.bg_challenge,
        interpreter_url: unbound_challenge.bg_challenge.interpreter_url.private_do_not_access_or_else_safe_script_wrapped_value ?? unbound_challenge.bg_challenge.interpreter_url.private_do_not_access_or_else_trusted_resource_url_wrapped_value ?? ''
      },
      challenge: unbound_challenge.challenge,
      eats: unbound_challenge.eats,
      expires_at_ms: this.#challengeExpiryAtMs(unbound_challenge.challenge)
    };
    if (!this.#unbound_challenge_cache.bg_challenge.interpreter_url) throw new InnertubeError('Unbound challenge bg_challenge missing valid "interpreter_url"');
    return this.#unbound_challenge_cache;
  }

  async #getCreatorStudioChallenge(unbound_challenge_eats: string): Promise<StudioCreatorStudioChallenge> {
    const creator_studio_challenge = await this.#attGet('ENGAGEMENT_TYPE_CREATOR_STUDIO_ACTION', [
      { externalChannelId: this.#channel_id }
    ], unbound_challenge_eats);

    if (!creator_studio_challenge.eats) throw new InnertubeError('Creator Studio challenge missing "eats"');
    if (!creator_studio_challenge.challenge) throw new InnertubeError('Creator Studio challenge missing "challenge"');
    if (!creator_studio_challenge.botguard_data) throw new InnertubeError('Creator Studio challenge missing "botguard_data"');

    const interpreter_url = creator_studio_challenge.botguard_data.interpreter_url.private_do_not_access_or_else_safe_script_wrapped_value ?? creator_studio_challenge.botguard_data.interpreter_url.private_do_not_access_or_else_trusted_resource_url_wrapped_value ?? '';
    if (!interpreter_url) throw new InnertubeError('Creator Studio challenge bg_challenge missing valid "interpreter_url"');
    return {
      botguard_data: {
        ...creator_studio_challenge.botguard_data,
        interpreter_url: interpreter_url
      },
      challenge: creator_studio_challenge.challenge,
      eats: creator_studio_challenge.eats
    };
  }

  async #getBotGuardAttestation(): Promise<BotGuardAttestationResponse> {
    if (!this.#botguard_solver) throw new InnertubeError('BotGuard Solver is not initialized. Please setup with setBotGuardSolver()');
    const unbound_challenge = this.#unbound_challenge_cache && this.#unbound_challenge_cache.expires_at_ms > Date.now() ? this.#unbound_challenge_cache : await this.#getUnboundChallenge();
    if (unbound_challenge.result) return { challenge: unbound_challenge.challenge, webResponse: unbound_challenge.result };
    const botguard_response = await this.#botguard_solver.solve(unbound_challenge.bg_challenge, unbound_challenge.challenge);
    unbound_challenge.result = botguard_response;
    this.#unbound_challenge_cache = unbound_challenge;
    return { challenge: unbound_challenge.challenge, webResponse: botguard_response };
  }

  #eatForceRefreshSessionToken() {
    const force_refresh_session_token = this.#force_refresh_session_token;
    this.#force_refresh_session_token = false;
    return force_refresh_session_token;
  }

  async getSessionToken(): Promise<string> {
    if (!this.#botguard_solver) throw new InnertubeError('BotGuard Solver is not initialized. Please setup with setBotGuardSolver()');
    if (this.#channel_id_session_token_cache && this.#channel_id_session_token_cache.expires_at_ms > Date.now() && !this.#eatForceRefreshSessionToken())
      return this.#channel_id_session_token_cache.session_token;

    const unbound_challenge = await this.#getUnboundChallenge();
    const creator_studio_challenge = await this.#getCreatorStudioChallenge(unbound_challenge.eats);

    // don't cache this result into the unbounded cache since it uses different challenge kinda
    const botguard_response = await this.#botguard_solver.solve(unbound_challenge.bg_challenge, creator_studio_challenge.challenge);

    const esr_data = await this.#actions.execute('/att/esr', { 
      client: 'WEB_CREATOR',
      parse: true,
      challenge: creator_studio_challenge.challenge,
      botguardResponse: botguard_response,
      xguardClientStatus: 0,
      eats: creator_studio_challenge.eats
    });

    if (!esr_data.ctx || esr_data.should_fetch_reauth_session_token === undefined) throw new InnertubeError('/att/esr did not return usable data');

    let grst_ctx = esr_data.ctx;
    let reauth_proof_token: string | undefined;
    if (esr_data.should_fetch_reauth_session_token === true) {
      const reauth_data = await this.#actions.execute('/security/get_web_reauth_url', {
        client: 'WEB_CREATOR',
        parse: true,
        continueUrl: `${Constants.URLS.YT_STUDIO_WEB_BASE}/reauth`,
        flow: 'REAUTH_FLOW_YT_STUDIO_COLD_LOAD',
        ivctx: esr_data.ctx,
        challenge: creator_studio_challenge.challenge,
        botguardResponse: botguard_response,
        eats: creator_studio_challenge.eats
      });
      if (!reauth_data.encoded_reauth_proof_token || !reauth_data.session_risk_ctx) throw new InnertubeError('/security/get_web_reauth_url did not return a reauth proof');
      grst_ctx = reauth_data.session_risk_ctx;
      reauth_proof_token = reauth_data.encoded_reauth_proof_token;
    }

    const grst_data = await this.#actions.execute('/ars/grst', { client: 'WEB_CREATOR', parse: true, ctx: grst_ctx, reauth_proof_token, eats: creator_studio_challenge.eats });
    
    if (grst_data.session_token === undefined) throw new InnertubeError('/ars/grst did not return a session token');
    this.#channel_id_session_token_cache = {
      session_token: grst_data.session_token,
      expires_at_ms: unbound_challenge.expires_at_ms
    };
    return grst_data.session_token;
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

  async managedExecute<T extends object>(endpoint: string, payload: object, channel_id?: string, attestation_placement: AttestationPlacement = 'none', eats?: string, is_retry = false): Promise<T> {
    const attestation_response_data = attestation_placement === 'none' ? {} : { attestationResponseData: await this.#getBotGuardAttestation() };

    const response = await this.#actions.execute(endpoint, {
      client: 'WEB_CREATOR',
      session_token: await this.getSessionToken(),
      ...payload,
      ...(attestation_placement === 'context' ? {} : { attestation_response_data }),
      ...(attestation_placement === 'top_level' ? {} : attestation_response_data),
      ...(!eats ? {} : { eats }),
      ...(!channel_id ? {} : { channel_id })
    });
    if (!response.success) throw new InnertubeError(`YouTube Studio call to ${endpoint} failed`);
    const data = response.data as T & StudioChallengeResponseContext;

    if (data.responseContext?.webResponseContextExtensionData?.challenge?.type === 'CHALLENGE_PROMPT_TYPE_AUTHENTICATE') {
      if (!is_retry && this.#auto_retry && channel_id !== undefined) {
        this.#force_refresh_session_token = true;
        return await this.managedExecute<T>(endpoint, payload, channel_id, attestation_placement, eats, true);
      }
      throw new InnertubeError('YouTube Studio is requesting an authentication challenge, likely a stale session token');
    }
    return data;
  }

  async uploadSubtitles(video_id: string, subtitles: NonNullable<UploadVideoDetails['subtitles']>, language = 'en-US'): Promise<UploadSubtitlesResponse> {
    const data_base64 = await subtitles.data.source.base64;
    const data_uri = `data:application/octet-stream;base64,${data_base64}`;
    const tts_track_id = { lang: language, kind: '', name: '' };

    const created = await this.managedExecute<CreateCaptionsResponse>('/globalization/create_captions', {
      videoId: video_id,
      channelId: this.#channel_id,
      newTrack: tts_track_id,
      overwrite: subtitles.overwrite ?? true,
      autoTranslate: subtitles.auto_translate ?? false
    }, this.#channel_id);

    const content_update_time = created.translation?.captionsTranslations?.[0]?.contentUpdateTime;
    if (content_update_time === undefined) throw new InnertubeError('create_captions did not return a contentUpdateTime');

    const parsed = await this.managedExecute<ParseCaptionsResponse>('/globalization/parse_captions', {
      fileType: subtitles.synced ? 'CAPTIONS_FILE_TYPE_TIMED_TEXT' : 'CAPTIONS_FILE_TYPE_TRANSCRIPT',
      fileName: subtitles.data.file_name,
      dataUri: data_uri
    }, this.#channel_id);

    const updated = await this.managedExecute<UpdateCaptionsResponse>('/globalization/update_captions', {
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
    }, this.#channel_id);
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
    if (details.audience !== undefined) {
      payload.madeForKids = {
        operation: 'MDE_MADE_FOR_KIDS_UPDATE_OPERATION_SET',
        newMfk: details.audience === 'MADE_FOR_KIDS' ? 'MDE_MADE_FOR_KIDS_TYPE_MFK' : 'MDE_MADE_FOR_KIDS_TYPE_NOT_MFK'
      };
    }
    if (details.paid_promotion !== undefined) payload.productPlacement = { newHasPaidProductPlacement: details.paid_promotion };
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

    if (details.video_language !== undefined) payload.audioLanguage = { newAudioLanguage: details.video_language };
    if (details.title_and_description_language !== undefined) payload.metadataLanguage = { newMetadataLanguage: details.title_and_description_language };
    if (details.caption_certification !== undefined) payload.captionsCertificate = { newUncaptionedReason: details.caption_certification };

    if (details.recording_date !== undefined) {
      payload.recordedDate = {
        operation: 'MDE_RECORDED_DATE_UPDATE_OPERATION_SET',
        newRecordedDate: {
          year: details.recording_date.getFullYear(),
          month: details.recording_date.getMonth() + 1,
          day: details.recording_date.getDate()
        }
      };
    }
    if (details.video_location !== undefined) {
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

  async #updateMetadata(video_id: string, payload: UpdateMetadataPayload): Promise<MetadataUpdateResponse> {
    return await this.managedExecute<MetadataUpdateResponse>('/video_manager/metadata_update', {
      encryptedVideoId: video_id,
      videoReadMask: VIDEO_READ_MASK,
      flowType: 'MDE_FLOW_TYPE_UPLOAD',
      ...payload
    }, this.#channel_id, 'top_level');
  }

  async updateVideo(video_id: string, details: Partial<UploadVideoDetails>) {
    let thumbnail_resource_id: string | undefined;
    if (details.thumbnail !== undefined) {
      const resource_id = await this.#uploadThumbnailResource(details.thumbnail);
      thumbnail_resource_id = resource_id;
    }

    const payload = this.#buildMetadataUpdate(details, thumbnail_resource_id);

    let update_metadata_response: MetadataUpdateResponse | object = {};
    let update_subtitles_response: UploadSubtitlesResponse | object = {};

    if (Object.keys(payload).length > 0) {
      update_metadata_response = await this.#updateMetadata(video_id, payload);
    }
    if (details.subtitles !== undefined) {
      update_subtitles_response = await this.uploadSubtitles(video_id, details.subtitles, details.video_language);
    }
    return { update_metadata_response, update_subtitles_response };
  }

  async publishVideo(video_id: string, visibility: StudioVisibility = 'PRIVATE') {
    const update_metadata_response = await this.#updateMetadata(video_id, {
      privacyState: { newPrivacy: visibility },
      draftState: { operation: 'MDE_DRAFT_STATE_UPDATE_OPERATION_REMOVE_DRAFT_STATE' }
    });
    return update_metadata_response;
  }

  #tryGetFeedbackToken(feedback: ContinuationsUploadFeedback): string | null {
    try {
      const feedback_token = feedback[0].uploadFeedbackItemContinuation.continuations[0].uploadFeedbackRefreshContinuation?.continuation;
      if (feedback_token) return feedback_token;
      const timed_token = feedback[0].uploadFeedbackItemContinuation.continuations[0].timedContinuationData?.continuation;
      if (timed_token) return timed_token;
      return null;
    } catch (_) {
      return null;
    }
  }
  #tryGetFeedbackDelay(feedback: ContinuationsUploadFeedback): number | null {
    try {
      const feedback_timeout = feedback[0].uploadFeedbackItemContinuation.continuations[0].uploadFeedbackRefreshContinuation?.continueInMs;
      if (feedback_timeout) return feedback_timeout;
      const timed_timeout = feedback[0].uploadFeedbackItemContinuation.continuations[0].timedContinuationData?.timeoutMs;
      if (timed_timeout) return timed_timeout;
      return null;
    } catch (_) {
      return null;
    }
  }

  // from https://studio.youtube.com/youtubei/v1/creator/get_channel_dashboard?alt=json under interactionRecordingParams; likely useless
  async uploadFeedback(tokens: string[], type: 'FEEDBACK_TOKENS'): Promise<{ isProcessed: boolean }>
  // initial from createvideo under uploadFeedbackRefreshContinuation
  async uploadFeedback(tokens: string[], type: 'CONTINUATION_TOKENS'): Promise<UploadFeedbackResult>
  async uploadFeedback(tokens: string[], type: 'FEEDBACK_TOKENS' | 'CONTINUATION_TOKENS'): Promise<{ isProcessed: boolean } | UploadFeedbackResult | null> {
    if (tokens.filter((token) => token).length === 0) return null;
    const feedback_data = await this.managedExecute<{ feedbackResponse?: { isProcessed: boolean }, continuationContents?: ContinuationsUploadFeedback }>('upload/feedback',
      type === 'CONTINUATION_TOKENS' ? { continuations: tokens } : { feedbackTokens: tokens });
    try {
      if (type === 'FEEDBACK_TOKENS') return feedback_data.feedbackResponse as { isProcessed: boolean };
      const contents = feedback_data.continuationContents as ContinuationsUploadFeedback;
      return {
        contents, next: async () => await this.uploadFeedback([
          this.#tryGetFeedbackToken(contents) ?? ''
        ], 'CONTINUATION_TOKENS')
      };
    } catch (_) {
      return null;
    }
  }

  async uploadFeedbackCycle(initial_tokens: (string | null)[], callback_continue: (content: ContinuationsUploadFeedback) => boolean) {
    if (initial_tokens.some((token) => token === null)) return;
    let feedback: null | UploadFeedbackResult = await this.uploadFeedback(initial_tokens as string[], 'CONTINUATION_TOKENS');
    if (feedback === null) return;
    do {
      try {
        if (!callback_continue(feedback.contents)) break;
        const delay = this.#tryGetFeedbackDelay(feedback.contents);
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

  #tryGetUploadVideoFeedbackToken(created: CreateVideoResponse): string | null {
    try {
      const feedback = created.contents.uploadFeedbackItemRenderer.continuations[0].uploadFeedbackRefreshContinuation?.continuation;
      if (feedback) return feedback;
      const timed = created.contents.uploadFeedbackItemRenderer.continuations[0].timedContinuationData?.continuation;
      if (timed) return timed;
      return null;
    } catch (_) {
      return null;
    }
  }

  async uploadVideo(file: FileNamedBufferReader, details: Partial<UploadVideoDetails> = {}, on_scotty_progress?: (written_bytes: number, total_bytes: number) => void,
    on_initial_create_video?: (full_created: { created: CreateVideoResponse, feedback_token: string | null }) => any) {
    const frontend_upload_id = `innertube_studio:${Platform.shim.uuidv4().toUpperCase()}:0`;
    const start = await this.#scottyStart(UPLOAD_TYPES_TO_START_URL['VIDEO'], file, { frontendUploadId: frontend_upload_id });

    const chunks_uploaded = this.#scottyUploadChunks(start.upload_url, file, on_scotty_progress);

    const created = await this.managedExecute<CreateVideoResponse>('/upload/createvideo', {
      channelId: this.#channel_id,
      resourceId: { scottyResourceId: { id: start.resource_id } },
      frontendUploadId: frontend_upload_id,
      initialMetadata: {
        title: { newTitle: details.title ?? file.file_name },
        privacy: { newPrivacy: 'PRIVATE' },
        draftState: { isDraft: true },
        ...(details.tags === undefined ? {} : { tags: { newTags: details.tags } }),
        // audience here is age restriction, not made for kids; details.audience goes up as madeForKids below
        targetedAudience: {
          operation: 'MDE_TARGETED_AUDIENCE_UPDATE_OPERATION_SET',
          newTargetedAudience: 'MDE_TARGETED_AUDIENCE_TYPE_ALL'
        }
      },
      contentLevelProtection: { enableRequiresContentLevelProtection: false },
      presumedShort: false
    }, this.#channel_id, 'context'); // createvideo reads its snapshot out of context.request

    on_initial_create_video?.({ created, feedback_token: this.#tryGetUploadVideoFeedbackToken(created) });

    const video_id = created.videoId;
    if (video_id === undefined || video_id === '') {
      await chunks_uploaded;
      throw new InnertubeError('createvideo did not return a videoId');
    }

    const uploaded = await chunks_uploaded;

    // title and tags already went up with createvideo
    const { title: _title, tags: _tags, visibility, ...remaining_details } = details;
    const updated = await this.updateVideo(video_id, remaining_details);

    const published = await this.publishVideo(video_id, visibility);

    return { created, updated, published };
  }
}
