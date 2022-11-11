import Parser from '..';
import { YTNode } from '../helpers';

import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import SubscribeButton from './SubscribeButton';

export default class TopicChannelDetails extends YTNode {
  static type = 'TopicChannelDetails';

  title: Text;
  avatar: Thumbnail[];
  subtitle: Text;
  subscribe_button: SubscribeButton | null;
  endpoint: NavigationEndpoint;

  constructor (data: any) {
    super();

    this.title = new Text(data.title);
    this.avatar = Thumbnail.fromResponse(data.thumbnail);
    this.subtitle = new Text(data.title);
    this.subscribe_button = Parser.parseItem<SubscribeButton>(data.subscribeButton, SubscribeButton);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}