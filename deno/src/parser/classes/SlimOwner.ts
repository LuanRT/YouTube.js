import Parser from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import SubscribeButton from './SubscribeButton.ts';
import { YTNode } from '../helpers.ts';

class SlimOwner extends YTNode {
  static type = 'SlimOwner';

  thumbnail: Thumbnail[];
  title: Text;
  endpoint: NavigationEndpoint;
  subscribe_button: SubscribeButton | null;

  constructor(data: any) {
    super();
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.subscribe_button = Parser.parseItem<SubscribeButton>(data.subscribeButton, SubscribeButton);
  }
}

export default SlimOwner;