import type { EngagementType } from '../../../types/Misc.js';
import { YTNode } from '../../helpers.js';
import type { IGetChallengeResponse, RawNode } from '../../types/index.js';

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
}