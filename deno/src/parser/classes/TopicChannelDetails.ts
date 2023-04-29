import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import SubscribeButton from './SubscribeButton.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

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