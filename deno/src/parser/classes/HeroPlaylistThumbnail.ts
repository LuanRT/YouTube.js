import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class HeroPlaylistThumbnail extends YTNode {
  static type = 'HeroPlaylistThumbnail';

  thumbnails: Thumbnail[];
  on_tap_endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.on_tap_endpoint = new NavigationEndpoint(data.onTap);
  }
}