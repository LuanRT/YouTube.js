import { YTNode } from '../helpers.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

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