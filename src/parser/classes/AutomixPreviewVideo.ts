import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type { RawNode } from '../index.js';

export default class AutomixPreviewVideo extends YTNode {
  static type = 'AutomixPreviewVideo';

  playlist_video?: { endpoint: NavigationEndpoint };

  constructor(data: RawNode) {
    super();
    if (data?.content?.automixPlaylistVideoRenderer?.navigationEndpoint) {
      this.playlist_video = {
        endpoint: new NavigationEndpoint(data.content.automixPlaylistVideoRenderer.navigationEndpoint)
      };
    }
  }
}