import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ChannelOptions extends YTNode {
  static type = 'ChannelOptions';

  avatar: Thumbnail[];
  endpoint: NavigationEndpoint;
  name: string;
  links: Text[];

  constructor(data: RawNode) {
    super();
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.endpoint = new NavigationEndpoint(data.avatarEndpoint);
    this.name = data.name;
    this.links = data.links.map((link: RawNode) => new Text(link));
  }
}