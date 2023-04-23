import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ChannelThumbnailWithLink extends YTNode {
  static type = 'ChannelThumbnailWithLink';

  thumbnails: Thumbnail[];
  endpoint: NavigationEndpoint;
  label?: string;

  constructor(data: RawNode) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.label = data.accessibility?.accessibilityData?.label;
  }
}