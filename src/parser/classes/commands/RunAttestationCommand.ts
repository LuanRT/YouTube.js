import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../types/index.js';

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

export default class RunAttestationCommand extends YTNode {
  static type = 'RunAttestationCommand';
  
  public engagement_type: string;
  public ids?: AttIds[];

  constructor(data: RawNode) {
    super();
    this.engagement_type = data.engagementType;
    if (Reflect.has(data, 'ids')) {
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