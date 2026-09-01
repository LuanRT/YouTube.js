import type { EngagementType } from '../../../types/Misc.js';
import { YTNode } from '../../helpers.js';
import type { IGetChallengeResponse, RawNode } from '../../types/index.js';
import type { EngagementType } from '../../../types/Misc.js';
import { InnertubeError } from '../../../utils/Utils.js';
import type { BotGuardSolver } from '../../../types/BotGuard.js';
import type Innertube from '../../../Innertube.js';

export type AttIds = {
  encrypted_video_id?: string;
  external_channel_id?: string;
  comment_id?: string;
  external_owner_id?: string;
  artist_id?: string;
  playlist_id?: string;
  external_post_id?: string;
  share_id?: string;
}

export type AttIdsRaw = {
  encryptedVideoId?: string;
  externalChannelId?: string;
  commentId?: string;
  externalOwnerId?: string;
  artistId?: string;
  playlistId?: string;
  externalPostId?: string;
  shareId?: string;
}

export default class RunAttestationCommand extends YTNode {
  static page_attestation_cache: Record<string, IGetChallengeResponse> = {};
  static type = 'RunAttestationCommand';

  public engagement_type: EngagementType;
  public ids?: AttIds[];
  public raw_ids?: AttIdsRaw[];

  constructor(data: RawNode) {
    super();
    this.engagement_type = data.engagementType;
    if (Reflect.has(data, 'ids')) {
      this.raw_ids = data.ids;
      this.ids = data.ids.map((id: RawNode) => ({
        encrypted_video_id: id.encryptedVideoId,
        external_channel_id: id.externalChannelId,
        comment_id: id.commentId,
        external_owner_id: id.externalOwnerId,
        artist_id: id.artistId,
        playlist_id: id.playlistId,
        external_post_id: id.externalPostId,
        share_id: id.shareId
      }));
    }
  }

  async #getChallenge(innertube: Innertube, atn_page_url?: string): Promise<IGetChallengeResponse> {
    // TODO maybe cache this part too?
    if (!atn_page_url) return await innertube.getAttestationChallenge(this.engagement_type, this.raw_ids);
    if (RunAttestationCommand.page_attestation_cache[atn_page_url]) {
      const params = new URLSearchParams(RunAttestationCommand.page_attestation_cache[atn_page_url].challenge);
      const issued_seconds = Number(params.get('c'));
      const ttl_seconds = Number(params.get('t'));
      if ((issued_seconds + ttl_seconds) * 1000 > Date.now()) return RunAttestationCommand.page_attestation_cache[atn_page_url];
    }
    const initial_data = await innertube.initialData(atn_page_url);
    if (initial_data.atn === null) throw new InnertubeError(`Was unable to find a challenge in atn_page_url: ${atn_page_url}`);
    RunAttestationCommand.page_attestation_cache[atn_page_url] = initial_data.atn;
    return initial_data.atn;
  };

  async run<T>(innertube: Innertube, botguard_solver: BotGuardSolver<T>, content_binding?: T, atn_page_url?: string) {
    const challenge = await this.#getChallenge(innertube, atn_page_url);
    if (!challenge.challenge || !challenge.bg_challenge)
      throw new InnertubeError(`Couldn't get data for botguard_challenge for engagement type: ${this.engagement_type} with ids: ${JSON.stringify(this.ids)}`);
    return {
      web_response: await botguard_solver.solve(challenge.bg_challenge, content_binding ?? challenge.challenge as T),
      challenge
    };
  }

}