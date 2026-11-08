import type Innertube from '../../Innertube.js';
import type RunAttestationCommand from '../../parser/classes/commands/RunAttestationCommand.js';
import type { AttIdsRaw } from '../../parser/classes/commands/RunAttestationCommand.js';
import type { IGetChallengeResponse, RawNode } from '../../parser/index.js';
import type { BotGuardChallengeInfo, BotGuardSolver, BotGuardSolverChallenge, BotGuardLogBinding, BotGuardSessionTokenBinding } from '../../types/BotGuard.js';
import type { EngagementType, InnerTubeClient } from '../../types/Misc.js';
import { InnertubeError } from '../../utils/Utils.js';
import type { PartialContext } from '../index.js';

export interface ChallengeSolverArgsBase<T> {
  content_binding: (challenge: string, engagement_type: EngagementType, ids: AttIdsRaw[]) => T;
  atn_page_url?: string;
  eacr_token?: string;
  client?: InnerTubeClient;
  ytcfg?: RawNode;
  one_time_context?: PartialContext;
}

export interface ChallengeSolverArgsRunAttestationCommand<T> extends ChallengeSolverArgsBase<T> {
  run_attestation_command: RunAttestationCommand;
}

export interface ChallengeSolverArgsEngagement<T> extends ChallengeSolverArgsBase<T> {
  engagement_type: EngagementType;
  ids: AttIdsRaw[];
}

export type ChallengeSolverArgs<T> = ChallengeSolverArgsEngagement<T> | ChallengeSolverArgsRunAttestationCommand<T>;
export type ChallengeNoBindingSolverArgs<T> = Omit<ChallengeSolverArgsEngagement<T>, 'content_binding'> | Omit<ChallengeSolverArgsRunAttestationCommand<T>, 'content_binding'>;
export type ChallengeFetchingArgs<T> = Omit<ChallengeSolverArgsEngagement<T>, 'content_binding'>;

export type StudioActionsEngagementType = Extract<EngagementType, 'ENGAGEMENT_TYPE_VIDEO_UPLOAD' | 'ENGAGEMENT_TYPE_VIDEO_METADATA_UPDATE'>;

export default class BotGuardManager {
  readonly #innertube: Innertube;
  #botguard_challenge_info_cache: Record<string, BotGuardChallengeInfo>;
  #studio_context_config_cache: Record<string, { user_one_time_context: PartialContext, page_config: Awaited<ReturnType<Innertube['pageConfig']>> }>;

  constructor(innertube: Innertube) {
    this.#innertube = innertube;
    this.#botguard_challenge_info_cache = {};
    this.#studio_context_config_cache = {};
  }

  #challengeExpired(challenge?: string) {
    if (!challenge) return true;
    const params = new URLSearchParams(challenge);
    const issued_seconds = Number(params.get('c'));
    const ttl_seconds = Number(params.get('t'));
    if ((issued_seconds + ttl_seconds) * 1000 > Date.now()) return false;
    return true;
  }

  #innerCacheKey(engagement_type: EngagementType, ids: AttIdsRaw[], atn_page_url?: string) {
    return engagement_type + JSON.stringify(ids) + (atn_page_url ?? '');
  }

  #cleanCache() {
    for (const key of Object.keys(this.#botguard_challenge_info_cache)) {
      if (this.#challengeExpired(this.#botguard_challenge_info_cache[key].challenge)) {
        delete this.#botguard_challenge_info_cache[key];
      }
    }
  }

  #insertCache<T>(challenge_info: BotGuardChallengeInfo, args: ChallengeFetchingArgs<T>) {
    this.#cleanCache();

    const inner_cache_key = this.#innerCacheKey(args.engagement_type, args.ids, args.atn_page_url);
    this.#botguard_challenge_info_cache[inner_cache_key] = challenge_info;
  }

  #checkCache<T>(args: ChallengeFetchingArgs<T>): BotGuardChallengeInfo|null {
    this.#cleanCache();

    const inner_cache_key = this.#innerCacheKey(args.engagement_type, args.ids, args.atn_page_url);
    if (!this.#challengeExpired(this.#botguard_challenge_info_cache[inner_cache_key]?.challenge))
      return this.#botguard_challenge_info_cache[inner_cache_key];
    return null;
  }

  #challengeResponseToBotGuardChallengeInfo(challenge_response: IGetChallengeResponse, ytcfg?: RawNode): BotGuardChallengeInfo {
    if (!challenge_response.challenge) throw new InnertubeError('Failed to get API attestation challenge info');
    if (challenge_response.bg_challenge) {
      if (ytcfg) (challenge_response.bg_challenge as BotGuardSolverChallenge).ytcfg = ytcfg;
      return challenge_response as BotGuardChallengeInfo;
    }
    if (challenge_response.botguard_data) return {
      bg_challenge: {
        global_name: 'trayride',
        client_experiments_state_blob: '',
        interpreter_hash: '',
        interpreter_url: challenge_response.botguard_data.interpreter_url,
        program: challenge_response.botguard_data.program,
        ytcfg
      },
      challenge: challenge_response.challenge
    };
    throw new InnertubeError('Unable to parse challenge_response to botguard_challenge_info');
  }

  async #getApiChallenge<T>(args: ChallengeFetchingArgs<T>): Promise<BotGuardChallengeInfo> {
    const cache_check = this.#checkCache(args);
    if (cache_check) return cache_check;

    const challenge_response = await this.#innertube.getAttestationChallenge(args.engagement_type, args.ids, {
      eacr_token: args.eacr_token,
      client: args.client,
      one_time_context: args.one_time_context
    });
    const botguard_challenge_info = this.#challengeResponseToBotGuardChallengeInfo(challenge_response, args.ytcfg);

    this.#insertCache(botguard_challenge_info, args);
    return botguard_challenge_info;
  }

  async #getPageChallenge<T>(args: ChallengeFetchingArgs<T>): Promise<BotGuardChallengeInfo> {
    // should never happen
    if (!args.atn_page_url) throw new InnertubeError('\'atn_page_url\' is required');
    const cache_check = this.#checkCache(args);
    if (cache_check) return cache_check;

    const page_config = await this.#innertube.pageConfig(args.atn_page_url);
    if (!page_config.atn && !page_config.eacr_token) throw new InnertubeError(`Unable to find a challenge in atn_page_url: ${args.atn_page_url}`);
    const challenge_response = page_config.atn ?? await this.#getApiChallenge({ ...args, engagement_type: 'ENGAGEMENT_TYPE_UNBOUND', eacr_token: page_config.eacr_token! });
    const botguard_challenge_info = this.#challengeResponseToBotGuardChallengeInfo(challenge_response, page_config.ytcfg ?? args.ytcfg);

    this.#insertCache(botguard_challenge_info, args);
    return botguard_challenge_info;
  }

  /**
   * Fetches a BotGuard challenge.
   * @param args - BotGuard challenge fetching args
   */
  async getChallenge<T>(args: ChallengeFetchingArgs<T>): Promise<BotGuardChallengeInfo> {
    if (!args.atn_page_url) return await this.#getApiChallenge(args);
    return await this.#getPageChallenge(args);
  }

  #normalizeChallengeSolverArgs<T>(args: ChallengeSolverArgs<T>): ChallengeSolverArgsEngagement<T> {
    if (!('run_attestation_command' in args)) return args;
    return {
      engagement_type: args.run_attestation_command.engagement_type,
      ids: args.run_attestation_command.raw_ids ?? [],
      ...args
    };
  }

  /**
   * Fetches a challenge, runs it and returns its response.
   * @param botguard_solver - The BotGuard challenge solver
   * @param args - BotGuard challenge fetching and solving args
   */
  async run<T>(botguard_solver: BotGuardSolver<T>, args: ChallengeSolverArgs<T>) {
    const normalized_args = this.#normalizeChallengeSolverArgs(args);
    const challenge = await this.getChallenge(normalized_args);
    return {
      web_response: await botguard_solver.solve(challenge.bg_challenge, args.content_binding(challenge.challenge, normalized_args.engagement_type, normalized_args.ids)),
      challenge
    };
  }

  /**
   * Fetches a challenge and logs its attestation.
   * @param botguard_solver - The BotGuard challenge solver
   * @param args - BotGuard challenge fetching args
   */
  async log(botguard_solver: BotGuardSolver<BotGuardLogBinding>, args: ChallengeNoBindingSolverArgs<BotGuardLogBinding>) {
    const log_content_binding_fn = (challenge: string, engagement_type: EngagementType, ids: AttIdsRaw[]): BotGuardLogBinding => {
      const spread_ids = Object.assign({}, ...ids);
      return {
        c: challenge,
        e: engagement_type,
        ...spread_ids
      };
    };
    const full_args = { ...args, content_binding: log_content_binding_fn } as ChallengeSolverArgs<BotGuardLogBinding>;
    const normalized_opts = this.#normalizeChallengeSolverArgs(full_args);
    const result = await this.run(botguard_solver, normalized_opts);
    return await this.#innertube.actions.execute('/att/log', {
      ...(args.client ? { client: args.client } : {}),
      challenge: result.challenge.challenge,
      engagementType: normalized_opts.engagement_type,
      ids: normalized_opts.ids,
      webResponse: result.web_response
    });
  }

  /**
   * Fetches an integrity token.
   * @param botguard_solver - The BotGuard challenge solver
   * @param challenge - The BotGuard challenge info
   */
  async fetchIntegrityToken(botguard_solver: BotGuardSolver<BotGuardLogBinding>, challenge: BotGuardChallengeInfo) {
    const binding: BotGuardLogBinding = {
      c: challenge.challenge,
      e: 'ENGAGEMENT_TYPE_INTEGRITY_GENERATION'
    };
    const web_response = await botguard_solver.solve(challenge.bg_challenge, binding);

    return await this.#innertube.actions.execute('/att/log', {
      parse: true,
      challenge: challenge.challenge,
      engagementType: 'ENGAGEMENT_TYPE_INTEGRITY_GENERATION',
      webResponse: web_response,
      returnIntegrityToken: true
    });
  }

  /**
   * Clears the entire studio context-config cache
   */
  clearStudioContextConfigCache() {
    this.#studio_context_config_cache = {};
  }

  /**
   * Gets both the user context and the `page_config` for YouTube Studio
   * @param channel_id - Channel ID of the target Studio session
   */
  async studioContextConfig(channel_id: string) {
    if (this.#studio_context_config_cache[channel_id]) return this.#studio_context_config_cache[channel_id];

    const page_config = await this.#innertube.pageConfig('https://studio.youtube.com/');
    if (page_config.ytcfg === null || page_config.eacr_token === null) throw new InnertubeError('Failed to get ytcfg or eacr_token');

    const user_one_time_context: PartialContext = {
      user: {
        delegationContext: {
          externalChannelId: channel_id,
          roleType: {
            channelRoleType: 'CREATOR_CHANNEL_ROLE_TYPE_OWNER'
          }
        },
        serializedDelegationContext: (page_config.ytcfg?.INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT as string) ?? ''
      }
    };

    this.#studio_context_config_cache[channel_id] = { user_one_time_context, page_config };

    return this.#studio_context_config_cache[channel_id];
  }

  /**
   * Fetches and solves the attestation for YouTube Studio
   * @param botguard_solver - The BotGuard challenge solver
   * @param engagement_type - The challenge engagement type
   * @param ids - The challenge ids
   * @param channel_id - Channel ID of the target Studio session
   */
  async studioAttestationResponseData(botguard_solver: BotGuardSolver<BotGuardLogBinding>, engagement_type: StudioActionsEngagementType, ids: AttIdsRaw[], channel_id: string) {
    const context_config = await this.studioContextConfig(channel_id);
    if (context_config.page_config.ytcfg === null || context_config.page_config.eacr_token === null) throw new InnertubeError('Failed to get ytcfg or eacr_token');

    const challenge = await this.getChallenge({
      eacr_token: context_config.page_config.eacr_token,
      ytcfg: context_config.page_config.ytcfg,
      one_time_context: context_config.user_one_time_context,
      client: 'WEB_CREATOR',
      engagement_type: 'ENGAGEMENT_TYPE_UNBOUND',
      ids: []
    });

    const spread_ids = Object.assign({}, ...ids);
    const binding = {
      c: challenge.challenge,
      e: engagement_type,
      ...spread_ids
    };
    const web_response = await botguard_solver.solve(challenge.bg_challenge, binding);
    return {
      challenge: challenge.challenge,
      webResponse: web_response
    };
  }

  /**
   * Fetches and solves the entire session attestation routine for YouTube Studio
   * @param botguard_solver - The BotGuard challenge solver
   * @param channel_id - Channel ID of the target Studio session
   */
  async studioSessionToken(botguard_solver: BotGuardSolver<BotGuardSessionTokenBinding>, channel_id: string) {
    const context_config = await this.studioContextConfig(channel_id);
    if (context_config.page_config.ytcfg === null || context_config.page_config.eacr_token === null) throw new InnertubeError('Failed to get ytcfg or eacr_token');

    const session_token_binding_fn = (challenge: string): BotGuardSessionTokenBinding => ({ atr_challenge: challenge });
    
    const creator_studio_result = await this.run(botguard_solver, {
      content_binding: session_token_binding_fn,
      one_time_context: context_config.user_one_time_context,
      client: 'WEB_CREATOR',
      engagement_type: 'ENGAGEMENT_TYPE_CREATOR_STUDIO_ACTION',
      ids: [ { externalChannelId: channel_id } ]
    });

    const evaluate_session_risk_response = await this.#innertube.actions.execute('/att/esr', { 
      parse: true,
      client: 'WEB_CREATOR',
      challenge: creator_studio_result.challenge.challenge,
      botguardResponse: creator_studio_result.web_response,
      xguardClientStatus: 0,
      one_time_context: context_config.user_one_time_context
    });

    if (evaluate_session_risk_response.session_token) return evaluate_session_risk_response.session_token;

    let grst_ctx = evaluate_session_risk_response.ctx;
    let reauth_proof_token: string = '';
    if (evaluate_session_risk_response.should_fetch_reauth_session_token === true) {
      const web_reauth_url = await this.#innertube.actions.execute('/security/get_web_reauth_url', { 
        parse: true,
        client: 'WEB_CREATOR',
        challenge: creator_studio_result.challenge.challenge,
        botguardResponse: creator_studio_result.web_response,
        continueUrl: 'https://studio.youtube.com/reauth',
        flow: 'REAUTH_FLOW_YT_STUDIO_COLD_LOAD',
        ivctx: evaluate_session_risk_response.ctx,
        one_time_context: context_config.user_one_time_context
      });

      if (web_reauth_url.plt) throw new InnertubeError(`Session has likely expired, try refreshing your login credentials then try again. Or try to visit ${web_reauth_url.web_reauth_url}`);
      if (web_reauth_url.session_risk_ctx) grst_ctx = web_reauth_url.session_risk_ctx;
      if (web_reauth_url.encoded_reauth_proof_token) reauth_proof_token = web_reauth_url.encoded_reauth_proof_token;
    }

    const reauth_session_token = await this.#innertube.actions.execute('/ars/grst', { 
      parse: true,
      client: 'WEB_CREATOR',
      ctx: grst_ctx,
      one_time_context: {
        ...context_config.user_one_time_context,
        request: { reauthRequestInfo: { encodedReauthProofToken: reauth_proof_token } }
      }
    });
    
    if (reauth_session_token.session_token === undefined) throw new InnertubeError('/ars/grst did not return a session token');
    return reauth_session_token.session_token;
  }
}