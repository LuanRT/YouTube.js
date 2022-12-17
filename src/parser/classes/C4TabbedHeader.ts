import Parser from '../index';
import Author from './misc/Author';
import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';

import type Button from './Button';
import type ChannelHeaderLinks from './ChannelHeaderLinks';
import type SubscribeButton from './SubscribeButton';

import { YTNode } from '../helpers';

class C4TabbedHeader extends YTNode {
  static type = 'C4TabbedHeader';

  author: Author;
  banner: Thumbnail[];
  tv_banner: Thumbnail[];
  mobile_banner: Thumbnail[];
  subscribers: Text;
  videos_count: Text;
  sponsor_button: Button | null;
  subscribe_button: SubscribeButton | null;
  header_links: ChannelHeaderLinks | null;
  channel_handle: Text;
  channel_id: string;

  constructor(data: any) {
    super();
    this.author = new Author({
      simpleText: data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.avatar);

    this.banner = Thumbnail.fromResponse(data.banner);
    this.tv_banner = Thumbnail.fromResponse(data.tvBanner);
    this.mobile_banner = Thumbnail.fromResponse(data.mobileBanner);
    this.subscribers = new Text(data.subscriberCountText);
    this.videos_count = new Text(data.videosCountText);
    this.sponsor_button = Parser.parseItem<Button>(data.sponsorButton);
    this.subscribe_button = Parser.parseItem<SubscribeButton>(data.subscribeButton);
    this.header_links = Parser.parseItem<ChannelHeaderLinks>(data.headerLinks);
    this.channel_handle = new Text(data.channelHandleText);
    this.channel_id = data.channelId;
  }
}

export default C4TabbedHeader;