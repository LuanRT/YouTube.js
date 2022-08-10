import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import { YTNode } from '../helpers';

class ChannelThumbnailWithLink extends YTNode {
  static type = 'ChannelThumbnailWithLink';

  thumbnails: Thumbnail[];
  endpoint: NavigationEndpoint;
  label: string;

  constructor(data: any) {
    super();
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.label = data.accessibility.accessibilityData.label;
  }
}

export default ChannelThumbnailWithLink;