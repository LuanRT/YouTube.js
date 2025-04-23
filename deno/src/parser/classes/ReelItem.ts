import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import AccessibilityData, { type AccessibilitySupportedDatas } from './misc/AccessibilityData.ts';

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