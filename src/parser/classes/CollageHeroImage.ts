import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class CollageHeroImage extends YTNode {
  static type = 'CollageHeroImage';

  left: Thumbnail[];
  top_right: Thumbnail[];
  bottom_right: Thumbnail[];
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.left = Thumbnail.fromResponse(data.leftThumbnail);
    this.top_right = Thumbnail.fromResponse(data.topRightThumbnail);
    this.bottom_right = Thumbnail.fromResponse(data.bottomRightThumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}