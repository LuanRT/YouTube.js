import { YTNode } from '../../helpers.js';
import { type RawNode } from '../../index.js';

export type ContainsRequestedVideos = 'UNSPECIFIED' | 'NONE' | 'SOME' | 'ALL';

export default class CreatorPlaylistMembership extends YTNode {
  static type = 'CreatorPlaylistMembership';

  contains_requested_videos?: ContainsRequestedVideos;
  playlist_id?: string;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'containsRequestedVideos')) {
      this.contains_requested_videos = data.containsRequestedVideos.replace('CONTAINS_REQUESTED_VIDEOS_', '');
    }

    if (Reflect.has(data, 'playlistId')) {
      this.playlist_id = data.playlistId;
    }
  }
}
