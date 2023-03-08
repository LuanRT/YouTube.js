import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import Thumbnail from './misc/Thumbnail.ts';

class GuideEntry extends YTNode {
  static type = 'GuideEntry';

  title: Text;
  endpoint: NavigationEndpoint;
  icon_type?: string;
  thumbnails?: Thumbnail[];
  badges?: any;
  is_primary: boolean;

  constructor(data: any) {
    super();
    this.title = new Text(data.formattedTitle);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
    if (data.icon?.iconType) {
      this.icon_type = data.icon.iconType;
    }
    if (data.thumbnail) {
      this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    }
    if (data.badges) {
      this.badges = data.badges;
    }
    this.is_primary = !!data.isPrimary;
  }
}

export default GuideEntry;