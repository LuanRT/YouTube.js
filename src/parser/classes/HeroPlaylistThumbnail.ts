import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';

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