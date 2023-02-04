import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';

class AutomixPreviewVideo extends YTNode {
  static type = 'AutomixPreviewVideo';

  playlist_video?: { endpoint: NavigationEndpoint };

  constructor(data: any) {
    super();
    if (data?.content?.automixPlaylistVideoRenderer?.navigationEndpoint) {
      this.playlist_video = {
        endpoint: new NavigationEndpoint(data.content.automixPlaylistVideoRenderer.navigationEndpoint)
      };
    }
  }
}

export default AutomixPreviewVideo;