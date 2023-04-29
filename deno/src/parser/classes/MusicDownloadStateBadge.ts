import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class MusicDownloadStateBadge extends YTNode {
  static type = 'MusicDownloadStateBadge';

  playlist_id: string;
  supported_download_states: string[];

  constructor(data: RawNode) {
    super();
    this.playlist_id = data.playlistId;
    this.supported_download_states = data.supportedDownloadStates;
  }
}