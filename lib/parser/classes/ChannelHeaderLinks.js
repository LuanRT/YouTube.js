import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';

class HeaderLink {
  constructor(data) {
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.icon = Thumbnail.fromResponse(data.icon);
    this.title = new Text(data.title);
  }
}
import { YTNode } from '../helpers';

class ChannelHeaderLinks extends YTNode {
  static type = 'ChannelHeaderLinks';
  constructor(data) {
    super();
    this.primary = data.primaryLinks?.map((link) => new HeaderLink(link)) || [];
    this.secondary = data.secondaryLinks?.map((link) => new HeaderLink(link)) || [];
  }
}
export default ChannelHeaderLinks;
