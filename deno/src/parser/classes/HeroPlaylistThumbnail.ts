import { YTNode } from '../helpers.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Thumbnail from './misc/Thumbnail.ts';

class HeroPlaylistThumbnail extends YTNode {
  static type = 'HeroPlaylistThumbnail';

  thumbnails: Thumbnail[];
  on_tap_endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();

    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint(data.onTap);
  }
}

export default HeroPlaylistThumbnail;