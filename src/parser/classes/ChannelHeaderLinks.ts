import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

class HeaderLink {
  endpoint: NavigationEndpoint;
  icon: Thumbnail[];
  title: Text;

  constructor(data: any) {
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.icon = Thumbnail.fromResponse(data.icon);
    this.title = new Text(data.title);
  }
}

class ChannelHeaderLinks extends YTNode {
  static type = 'ChannelHeaderLinks';

  primary: HeaderLink[];
  secondary: HeaderLink[];

  constructor(data: any) {
    super();
    this.primary = data.primaryLinks?.map((link: any) => new HeaderLink(link)) || [];
    this.secondary = data.secondaryLinks?.map((link: any) => new HeaderLink(link)) || [];
  }
}

export default ChannelHeaderLinks;