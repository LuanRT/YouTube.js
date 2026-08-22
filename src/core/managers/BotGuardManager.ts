import type Innertube from '../../Innertube.js';
import type { AttIdsRaw } from '../../parser/classes/commands/RunAttestationCommand.js';
import type { IGetChallengeResponse, RawNode } from '../../parser/index.js';
import type { BotGuardChallengeInfo, BotGuardSolver, BotGuardSolverChallenge } from '../../types/BotGuard.js';
import type { EngagementType } from '../../types/Misc.js';
import { InnertubeError } from '../../utils/Utils.js';
import type { ClientType } from '../index.js';

export interface ChallengeSolverOpts<T> {
  engagement_type: EngagementType;
  ids: AttIdsRaw[];
  content_binding?: T;
  atn_page_url?: string;
  eacr_token?: string;
  eats?: string;
  client?: ClientType;
  ytcfg?: RawNode;
}

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
      if (this.#challengeExpired(this.#botguard_challenge_info_cache[key].challenge))
        delete this.#botguard_challenge_info_cache[key];
    }
  }

  #insertCache<T>(challenge_info: BotGuardChallengeInfo, opts: ChallengeSolverOpts<T>) {
    this.#cleanCache();
    const inner_cache_key = this.#innerCacheKey(opts.engagement_type, opts.ids, opts.atn_page_url);
    this.#botguard_challenge_info_cache[inner_cache_key] = challenge_info;
  }

  #checkCache<T>(opts: ChallengeSolverOpts<T>): BotGuardChallengeInfo|null {
    this.#cleanCache();
    const inner_cache_key = this.#innerCacheKey(opts.engagement_type, opts.ids, opts.atn_page_url);
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

  async #getApiChallenge<T>(opts: ChallengeSolverOpts<T>): Promise<BotGuardChallengeInfo> {
    const cache_check = this.#checkCache(opts);
    if (cache_check) return cache_check;

    const challenge_response = await this.#innertube.getAttestationChallenge(opts.engagement_type, opts.ids, opts.eacr_token);
    const botguard_challenge_info = this.#challengeResponseToBotGuardChallengeInfo(challenge_response, opts.ytcfg);
    this.#insertCache(botguard_challenge_info, opts);
    return botguard_challenge_info;
  }
  async #getPageChallenge<T>(opts: ChallengeSolverOpts<T>): Promise<BotGuardChallengeInfo> {
    if (!opts.atn_page_url) throw new InnertubeError('Assertion failed; \'atn_page_url\' was supposed to not be empty');
    const cache_check = this.#checkCache(opts);
    if (cache_check) return cache_check;

    const initial_data = await this.#innertube.initialData(opts.atn_page_url);
    if (!initial_data.atn && !initial_data.eacr_token) throw new InnertubeError(`Was unable to find a challenge in atn_page_url: ${opts.atn_page_url}`);
    const challenge_response = initial_data.atn ?? await this.#getApiChallenge({ ...opts, engagement_type: 'ENGAGEMENT_TYPE_UNBOUND', eacr_token: initial_data.eacr_token! });
    const botguard_challenge_info = this.#challengeResponseToBotGuardChallengeInfo(challenge_response, initial_data.ytcfg ?? opts.ytcfg);

    this.#insertCache(botguard_challenge_info, opts);
    return botguard_challenge_info;
  }

  async getChallenge<T>(opts: ChallengeSolverOpts<T>): Promise<BotGuardChallengeInfo> {
    if (!opts.atn_page_url) return await this.#getApiChallenge(opts);
    return await this.#getPageChallenge(opts);
  };

  async run<T>(botguard_solver: BotGuardSolver<T>, opts: ChallengeSolverOpts<T>) {
    const challenge = await this.getChallenge(opts);
    return {
      web_response: await botguard_solver.solve(challenge.bg_challenge, opts.content_binding ?? challenge.challenge as T),
      challenge
    };
  }
}