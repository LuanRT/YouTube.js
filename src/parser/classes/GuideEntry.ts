import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class GuideEntry extends YTNode {
  static type = 'GuideEntry';

  title: Text;
  endpoint: NavigationEndpoint;
  icon_type?: string;
  thumbnails?: Thumbnail[];
  badges?: any;
  is_primary: boolean;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.formattedTitle);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);

    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType')) {
      this.icon_type = data.icon.iconType;
    }

    if (Reflect.has(data, 'thumbnail')) {
      this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    }

    // (LuanRT) XXX: Check this property's data and parse it.
    if (Reflect.has(data, 'badges')) {
      this.badges = data.badges;
    }

    this.is_primary = !!data.isPrimary;
  }
}