import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type Menu from './menus/Menu.js';
import { YTNode } from '../helpers.js';

class CompactChannel extends YTNode {
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

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.channel_id = data.channelId;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.display_name = new Text(data.displayName);
    this.video_count = new Text(data.videoCountText);
    this.subscriber_count = new Text(data.subscriberCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.tv_banner = Thumbnail.fromResponse(data.tvBanner);
    this.menu = Parser.parseItem<Menu>(data.menu);
  }
}

export default CompactChannel;