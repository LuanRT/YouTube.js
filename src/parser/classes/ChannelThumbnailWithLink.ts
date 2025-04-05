import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import AccessibilityData, { type AccessibilitySupportedDatas } from './misc/AccessibilityData.js';

export default class ChannelThumbnailWithLink extends YTNode {
  static type = 'ChannelThumbnailWithLink';

  public thumbnails: Thumbnail[];
  public endpoint: NavigationEndpoint;
  public accessibility?: AccessibilitySupportedDatas;

  constructor(data: RawNode) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);

    if ('accessibility' in data
      && 'accessibilityData' in data.accessibility) {
      this.accessibility = {
        accessibility_data: new AccessibilityData(data.accessibility.accessibilityData)
      };
    }
  }
  
  get label(): string | undefined {
    return this.accessibility?.accessibility_data?.label;
  }
}