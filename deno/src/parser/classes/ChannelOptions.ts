import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

import { YTNode } from '../helpers.ts';

class ChannelOptions extends YTNode {
  static type = 'ChannelOptions';

  avatar: Thumbnail[];
  endpoint: NavigationEndpoint;
  name: string;
  links: Text[];

  constructor(data: any) {
    super();
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.endpoint = new NavigationEndpoint(data.avatarEndpoint);
    this.name = data.name;
    this.links = data.links.map((link: any) => new Text(link));
  }
}

export default ChannelOptions;