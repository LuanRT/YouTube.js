import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import SubscribeButton from './SubscribeButton.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class TopicChannelDetails extends YTNode {
  static type = 'TopicChannelDetails';

  title: Text;
  avatar: Thumbnail[];
  subtitle: Text;
  subscribe_button: SubscribeButton | null;
  endpoint: NavigationEndpoint;

  constructor (data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.avatar = Thumbnail.fromResponse(data.thumbnail ?? data.avatar);
    this.subtitle = new Text(data.subtitle);
    this.subscribe_button = Parser.parseItem(data.subscribeButton, SubscribeButton);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}