import Parser from '..';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import SubscribeButton from './SubscribeButton';
import { YTNode } from '../helpers';

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