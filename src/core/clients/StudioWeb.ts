import type { BotGuardChallenge, BotGuardSolver } from '../../types/BotGuard.js';
import type { EngagementType } from '../../types/Misc.js';
import type { FileNamedBufferReader, UploadVideoDetails } from '../../types/StudioWebUploading.js';
import { Constants } from '../../utils/index.js';
import { InnertubeError } from '../../utils/Utils.js';
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

export default class StudioWeb {
  #session: Session;
  #actions: Actions;
  #botguard_solver: BotGuardSolver<string>|null;
  #unbound_challenge_cache: StudioUnboundChallenge|undefined;
  #auto_retry: boolean;
  #force_refresh_session_token: boolean;
  #channel_id_session_token_cache: Record<string, StudioSessionTokenCache>;

  constructor(session: Session) {
    this.#session = session;
    this.#actions = session.actions;
    this.#botguard_solver = null;
    this.#auto_retry = true;
    this.#force_refresh_session_token = false;
    this.#channel_id_session_token_cache = {};
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

  async #getCreatorStudioChallenge(channel_id: string, unbound_challenge_eats: string): Promise<StudioCreatorStudioChallenge> {
    const creator_studio_challenge = await this.#attGet('ENGAGEMENT_TYPE_CREATOR_STUDIO_ACTION', [ { externalChannelId: channel_id } ], unbound_challenge_eats);

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

  async getSessionToken(channel_id: string): Promise<string> {
    if (!this.#botguard_solver) throw new InnertubeError('BotGuard Solver is not initialized. Please setup with setBotGuardSolver()');
    if (this.#channel_id_session_token_cache[channel_id]?.expires_at_ms > Date.now() && !this.#eatForceRefreshSessionToken()) return this.#channel_id_session_token_cache[channel_id].session_token;

    const unbound_challenge = await this.#getUnboundChallenge();
    const creator_studio_challenge = await this.#getCreatorStudioChallenge(channel_id, unbound_challenge.eats);

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
    const UPLOAD_TYPES_TO_START_URL: Record<ScottyUploadType, string> = {
      VIDEO: Constants.URLS.YT_UPLOAD_VIDEO_WEB,
      THUMBNAIL: Constants.URLS.YT_UPLOAD_THUMBNAIL_WEB
    };
    const start = await this.#scottyStart(UPLOAD_TYPES_TO_START_URL[upload_type], file_name_buffer_reader, start_payload);
    const uploaded = await this.#scottyUploadChunks(start.upload_url, file_name_buffer_reader, on_progress);
    const resource_id = start.resource_id ?? uploaded.resource_id;
    if (!resource_id) throw new InnertubeError('Scotty did not return a resource id');
    return resource_id;
  }

  async #uploadThumbnailResource(file_name_buffer_reader: FileNamedBufferReader): Promise<string> {
    return await this.#uploadToScotty('THUMBNAIL', file_name_buffer_reader, {});
  }

  async managedExecute<T extends object>(endpoint: string, payload: object, channel_id: string, attestation_placement: AttestationPlacement = 'none', eats?: string, is_retry = false): Promise<T> {
    const attestation_response_data = attestation_placement === 'none' ? {} : { attestationResponseData: await this.#getBotGuardAttestation() };

    const response = await this.#actions.execute(endpoint, {
      client: 'WEB_CREATOR',
      session_token: await this.getSessionToken(channel_id),
      ...payload,
      ...(attestation_placement === 'context' ? {} : { attestation_response_data }),
      ...(attestation_placement === 'top_level' ? {} : attestation_response_data),
      ...(!eats ? {} : { eats })
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

  async #uploadSubtitles(channel_id: string, video_id: string, subtitles: NonNullable<UploadVideoDetails['subtitles']>, language = 'en-US') {
    const data_base64 = await subtitles.data.source.base64;
    const data_uri = `data:application/octet-stream;base64,${data_base64}`;
    const tts_track_id = { lang: language, kind: '', name: '' };

    const created = await this.managedExecute<CreateCaptionsResponse>('/globalization/create_captions', {
      parse: true,
      videoId: video_id,
      channelId: channel_id,
      newTrack: tts_track_id,
      overwrite: subtitles.overwrite ?? true,
      autoTranslate: subtitles.auto_translate ?? false,
      channel_id
    }, channel_id);

    const content_update_time = created.translation?.captionsTranslations?.[0]?.contentUpdateTime;
    if (content_update_time === undefined) throw new InnertubeError('create_captions did not return a contentUpdateTime');

    const parsed = await this.managedExecute<ParseCaptionsResponse>('/globalization/parse_captions', {
      fileType: subtitles.synced ? 'CAPTIONS_FILE_TYPE_TIMED_TEXT' : 'CAPTIONS_FILE_TYPE_TRANSCRIPT',
      fileName: subtitles.data.file_name,
      dataUri: data_uri,
      channel_id
    }, channel_id);

    const updated = await this.managedExecute<UpdateCaptionsResponse>('/globalization/update_captions', {
      videoId: video_id,
      channelId: channel_id,
      operations: [
        {
          ttsTrackId: tts_track_id,
          userIntent: 'USER_INTENT_EDIT_LATEST_DRAFT',
          vote: 'VOTE_PUBLISH',
          isContentEdited: false,
          contentUpdateTime: content_update_time,
          captionsFile: { dataUri: data_uri, fileName: subtitles.data.file_name }
        }
      ],
      channel_id
    }, channel_id);
    return { created, parsed, updated };
  }
}
