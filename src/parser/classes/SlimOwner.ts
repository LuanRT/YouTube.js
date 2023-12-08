import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscribeButton from './SubscribeButton.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class SlimOwner extends YTNode {
  static type = 'SlimOwner';

  thumbnail: Thumbnail[];
  title: Text;
  endpoint: NavigationEndpoint;
  subscribe_button: SubscribeButton | null;

  constructor(data: RawNode) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.subscribe_button = Parser.parseItem(data.subscribeButton, SubscribeButton);
  }
}