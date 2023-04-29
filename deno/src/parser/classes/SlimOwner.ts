import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import SubscribeButton from './SubscribeButton.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

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