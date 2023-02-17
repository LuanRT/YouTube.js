import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import SubscribeButton from './SubscribeButton.ts';

class TopicChannelDetails extends YTNode {
  static type = 'TopicChannelDetails';

  title: Text;
  avatar: Thumbnail[];
  subtitle: Text;
  subscribe_button: SubscribeButton | null;
  endpoint: NavigationEndpoint;

  constructor (data: any) {
    super();

    this.title = new Text(data.title);
    this.avatar = Thumbnail.fromResponse(data.thumbnail ?? data.avatar);
    this.subtitle = new Text(data.subtitle);
    this.subscribe_button = Parser.parseItem<SubscribeButton>(data.subscribeButton, SubscribeButton);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default TopicChannelDetails;