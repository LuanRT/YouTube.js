import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

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