import { YTNode } from '../../helpers.js';
import type { IGetChallengeResponse, RawData, RawNode } from '../../index.js';
import type { EngagementType } from '../../../types/Misc.js';
import type { BotGuardSolver } from '../../../types/BotGuard.js';
import type Innertube from '../../../Innertube.js';
import { InnertubeError } from '../../../utils/Utils.js';

// TODO fix conflicts with other RunAttestationCommand
export default class RunAttestationCommand extends YTNode {
  static type = 'RunAttestationCommand';
  static page_attestation_cache: Record<string, IGetChallengeResponse>;

  engagement_type: EngagementType;
  ids?: RawData[];

  constructor(data: RawNode) {
    super();
    this.engagement_type = data.engagementType;
    this.ids = data.ids;
  }
  
  async #getChallenge(innertube: Innertube, atn_page_url?: string): Promise<IGetChallengeResponse> {
    // TODO maybe cache this part too?
    if (!atn_page_url) return await innertube.getAttestationChallenge(this.engagement_type, this.ids);
    if (RunAttestationCommand.page_attestation_cache[atn_page_url]) {
      const params = new URLSearchParams(RunAttestationCommand.page_attestation_cache[atn_page_url].challenge);
      const issued_seconds = Number(params.get('c'));
      const ttl_seconds = Number(params.get('t'));
      if ((issued_seconds + ttl_seconds) * 1000 > Date.now()) return RunAttestationCommand.page_attestation_cache[atn_page_url];
    }
    const initial_data = await innertube.initialData(atn_page_url);
    if (initial_data.atn === null) throw new InnertubeError(`Was unable to find a challenge in atn_page_url: ${atn_page_url}`);
    return initial_data.atn;
  };

  async run<T>(innertube: Innertube, botguard_solver: BotGuardSolver<T>, content_binding?: T, atn_page_url?: string) {
    const challenge = await this.#getChallenge(innertube, atn_page_url);
    if (!challenge.challenge || !challenge.bg_challenge)
      throw new InnertubeError(`Couldn't get data for botguard_challenge for engagement type: ${this.engagement_type} with ids: ${JSON.stringify(this.ids)}`);
    return {
      web_response: botguard_solver.solve(challenge.bg_challenge, content_binding ?? challenge.challenge as T),
      challenge
    };
  }
}