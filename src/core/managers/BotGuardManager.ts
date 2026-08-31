import type Innertube from '../../Innertube.js';
import type RunAttestationCommand from '../../parser/classes/commands/RunAttestationCommand.js';
import type { AttIdsRaw } from '../../parser/classes/commands/RunAttestationCommand.js';
import type { IGetChallengeResponse, RawNode } from '../../parser/index.js';
import type { BotGuardChallengeInfo, BotGuardSolver, BotGuardSolverChallenge, BotGuardLogBinding, BotGuardSessionTokenBinding } from '../../types/BotGuard.js';
import type { EngagementType, InnerTubeClient } from '../../types/Misc.js';
import { channelUserDelegationContext } from '../../utils/Context.js';
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

export type ChallengeFetchingArgs<T> = Omit<ChallengeSolverArgsEngagement<T>, 'content_binding'>;
export type ChallengeSolverArgs<T> = ChallengeSolverArgsEngagement<T> | ChallengeSolverArgsRunAttestationCommand<T>;

export default class BotGuardManager {
  readonly #innertube: Innertube;
  #botguard_challenge_info_cache: Record<string, BotGuardChallengeInfo>;

  constructor(innertube: Innertube) {
    this.#innertube = innertube;
    this.#botguard_challenge_info_cache = {};
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
    return engagement_type + JSON.stringify(ids) + (atn_page_url ? atn_page_url : '');
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
        ytcfg: ytcfg
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
    if (!args.atn_page_url) throw new InnertubeError('Assertion failed; \'atn_page_url\' was supposed to not be empty');
    const cache_check = this.#checkCache(args);
    if (cache_check) return cache_check;

    const initial_data = await this.#innertube.initialData(args.atn_page_url);
    if (!initial_data.atn && !initial_data.eacr_token) throw new InnertubeError(`Was unable to find a challenge in atn_page_url: ${args.atn_page_url}`);
    const challenge_response = initial_data.atn ?? await this.#getApiChallenge({ ...args, engagement_type: 'ENGAGEMENT_TYPE_UNBOUND', eacr_token: initial_data.eacr_token! });
    const botguard_challenge_info = this.#challengeResponseToBotGuardChallengeInfo(challenge_response, initial_data.ytcfg ?? args.ytcfg);

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
  };

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
  async log(botguard_solver: BotGuardSolver<BotGuardLogBinding>, args: ChallengeFetchingArgs<BotGuardLogBinding>) {
    const log_content_binding_fn = (challenge: string, engagement_type: EngagementType, ids: AttIdsRaw[]): BotGuardLogBinding => {
      const spread_ids = Object.assign({}, ids);
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
   * Fetches and solves the entire attestation routine for YouTube Studio
   * @param botguard_solver - The BotGuard challenge solver
   * @param channel_id - Channel ID of the target Studio session
   */
  async studioSessionToken(botguard_solver: BotGuardSolver<BotGuardSessionTokenBinding>, channel_id: string) {
    const session_token_binding_fn = (challenge: string): BotGuardSessionTokenBinding => ({ atr_challenge: challenge });
    const user_one_time_context = { user: channelUserDelegationContext(channel_id) };
    const initial_data = await this.#innertube.initialData('https://studio.youtube.com/');

    const base_args = {
      content_binding: session_token_binding_fn,
      ...(initial_data.ytcfg ? { ytcfg: initial_data.ytcfg } : {})
    };

    const unbounded_challenge = await this.run(botguard_solver, {
      ...base_args,
      ...(initial_data.eacr_token ? { eacr_token: initial_data.eacr_token } : {}),
      client: 'WEB_CREATOR',
      engagement_type: 'ENGAGEMENT_TYPE_UNBOUND',
      ids: []
    });
    const creator_studio_result = await this.run(botguard_solver, {
      ...base_args,
      one_time_context: user_one_time_context,
      client: 'WEB_CREATOR',
      engagement_type: 'ENGAGEMENT_TYPE_CREATOR_STUDIO_ACTION',
      ids: [ { externalChannelId: channel_id } ]
    });

    const attestation_data_response = {
      challenge: unbounded_challenge.challenge.challenge,
      web_response: unbounded_challenge.web_response
    };

    const evaluate_session_risk_response = await this.#innertube.actions.execute('/att/esr', { 
      parse: true,
      client: 'WEB_CREATOR',
      challenge: creator_studio_result.challenge.challenge,
      botguardResponse: creator_studio_result.web_response,
      xguardClientStatus: 0,
      one_time_context: user_one_time_context
    });

    if (evaluate_session_risk_response.session_token) {
      return {
        session_token: evaluate_session_risk_response.session_token,
        attestation_data_response
      };
    }

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
        one_time_context: user_one_time_context
      });

      if (web_reauth_url.plt) throw new InnertubeError('Session has expired, try refreshing your login credentials then try again.');
      if (web_reauth_url.session_risk_ctx) grst_ctx = web_reauth_url.session_risk_ctx;
      if (web_reauth_url.encoded_reauth_proof_token) reauth_proof_token = web_reauth_url.encoded_reauth_proof_token;
    }

    const reauth_session_token = await this.#innertube.actions.execute('/ars/grst', { 
      parse: true,
      client: 'WEB_CREATOR',
      ctx: grst_ctx,
      one_time_context: {
        ...user_one_time_context,
        request: { reauthRequestInfo: { encodedReauthProofToken: reauth_proof_token } }
      }
    });
    
    if (reauth_session_token.session_token === undefined) throw new InnertubeError('/ars/grst did not return a session token');

    return {
      session_token: reauth_session_token.session_token,
      attestation_data_response
    };
  }
}