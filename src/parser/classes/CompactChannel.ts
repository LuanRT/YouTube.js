import Parser from '..';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import type Menu from './menus/Menu';
import { YTNode } from '../helpers';

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