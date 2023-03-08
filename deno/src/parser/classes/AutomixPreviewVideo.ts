import { YTNode } from '../helpers.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import type { RawNode } from '../index.ts';
class AutomixPreviewVideo extends YTNode {
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

export default AutomixPreviewVideo;