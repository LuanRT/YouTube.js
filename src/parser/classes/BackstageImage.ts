import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class BackstageImage extends YTNode {
  static type = 'BackstageImage';

  image: Thumbnail[];
  endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.image = Thumbnail.fromResponse(data.image);
    this.endpoint = new NavigationEndpoint(data.command);
  }
}