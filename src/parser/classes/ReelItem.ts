import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import AccessibilityData, { type AccessibilitySupportedDatas } from './misc/AccessibilityData.js';

export default class ReelItem extends YTNode {
  static type = 'ReelItem';

  public id: string;
  public title: Text;
  public thumbnails: Thumbnail[];
  public views: Text;
  public endpoint: NavigationEndpoint;
  public accessibility?: AccessibilitySupportedDatas;

  constructor(data: RawNode) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.headline);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.views = new Text(data.viewCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);

    if ('accessibility' in data
      && 'accessibilityData' in data.accessibility) {
      this.accessibility = {
        accessibility_data: new AccessibilityData(data.accessibility.accessibilityData)
      };
    }
  }
  
  get label() {
    return this.accessibility?.accessibility_data?.label;
  }
}