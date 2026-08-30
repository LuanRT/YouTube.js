import type Innertube from '../../Innertube.js';
import type RunAttestationCommand from '../../parser/classes/commands/RunAttestationCommand.js';
import type { AttIdsRaw } from '../../parser/classes/commands/RunAttestationCommand.js';
import type { IGetChallengeResponse, RawNode } from '../../parser/index.js';
import type { BotGuardChallengeInfo, BotGuardSolver, BotGuardSolverChallenge, BotGuardLogBinding } from '../../types/BotGuard.js';
import type { EngagementType } from '../../types/Misc.js';
import { InnertubeError } from '../../utils/Utils.js';
import type { ClientType } from '../index.js';

export interface ChallengeSolverArgsBase<T> {
  content_binding: (challenge: string, engagement_type: EngagementType, ids: AttIdsRaw[]) => T;
  atn_page_url?: string;
  eacr_token?: string;
  eats?: string;
  client?: ClientType;
  ytcfg?: RawNode;
}

export interface ChallengeSolverArgsRunAttestationCommand<T> extends ChallengeSolverArgsBase<T> {
  run_attestation_command: RunAttestationCommand;
}

export interface ChallengeSolverArgsEngagement<T> extends ChallengeSolverArgsBase<T> {
  engagement_type: EngagementType;
  ids: AttIdsRaw[];
}

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

  #insertCache<T>(challenge_info: BotGuardChallengeInfo, args: ChallengeSolverArgsEngagement<T>) {
    this.#cleanCache();

    const inner_cache_key = this.#innerCacheKey(args.engagement_type, args.ids, args.atn_page_url);
    this.#botguard_challenge_info_cache[inner_cache_key] = challenge_info;
  }

  #checkCache<T>(args: ChallengeSolverArgsEngagement<T>): BotGuardChallengeInfo|null {
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

  async #getApiChallenge<T>(args: ChallengeSolverArgsEngagement<T>): Promise<BotGuardChallengeInfo> {
    const cache_check = this.#checkCache(args);
    if (cache_check) return cache_check;

    const challenge_response = await this.#innertube.getAttestationChallenge(args.engagement_type, args.ids, {
      eacr_token: args.eacr_token,
      client: args.client,
      eats: args.eats
    });
    const botguard_challenge_info = this.#challengeResponseToBotGuardChallengeInfo(challenge_response, args.ytcfg);

    this.#insertCache(botguard_challenge_info, args);
    return botguard_challenge_info;
  }
  async #getPageChallenge<T>(args: ChallengeSolverArgsEngagement<T>): Promise<BotGuardChallengeInfo> {
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

  async getChallenge<T>(args: ChallengeSolverArgsEngagement<T>): Promise<BotGuardChallengeInfo> {
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

  async run<T>(botguard_solver: BotGuardSolver<T>, args: ChallengeSolverArgs<T>) {
    const normalized_args = this.#normalizeChallengeSolverArgs(args);
    const challenge = await this.getChallenge(normalized_args);
    return {
      web_response: await botguard_solver.solve(challenge.bg_challenge, args.content_binding(challenge.challenge, normalized_args.engagement_type, normalized_args.ids)),
      challenge
    };
  }

  async log(botguard_solver: BotGuardSolver<BotGuardLogBinding>, args: Omit<ChallengeSolverArgs<BotGuardLogBinding>, 'content_binding'>) {
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
      ...(args.eats ? { one_time_context: { request: { eats: args.eats } } } : {}),
      challenge: result.challenge.challenge,
      engagementType: normalized_opts.engagement_type,
      ids: normalized_opts.ids,
      webResponse: result.web_response
    });
  }
}