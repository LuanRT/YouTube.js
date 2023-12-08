import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class CompactChannel extends YTNode {
  static type = 'CompactChannel';

  title: Text;
  channel_id: string;
  thumbnail: Thumbnail[];
  display_name: Text;
  video_count: Text;
  subscriber_count: Text;
  endpoint: NavigationEndpoint;
  tv_banner: Thumbnail[];
  menu: Menu | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.channel_id = data.channelId;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.display_name = new Text(data.displayName);
    this.video_count = new Text(data.videoCountText);
    this.subscriber_count = new Text(data.subscriberCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.tv_banner = Thumbnail.fromResponse(data.tvBanner);
    this.menu = Parser.parseItem(data.menu, Menu);
  }
}