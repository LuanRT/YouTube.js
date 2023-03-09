import Parser from '../index.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

import Button from './Button.js';
import ChannelHeaderLinks from './ChannelHeaderLinks.js';
import SubscribeButton from './SubscribeButton.js';

import { YTNode } from '../helpers.js';

class C4TabbedHeader extends YTNode {
  static type = 'C4TabbedHeader';

  author: Author;
  banner?: Thumbnail[];
  tv_banner?: Thumbnail[];
  mobile_banner?: Thumbnail[];
  subscribers?: Text;
  videos_count?: Text;
  sponsor_button?: Button | null;
  subscribe_button?: SubscribeButton | null;
  header_links?: ChannelHeaderLinks | null;
  channel_handle?: Text;
  channel_id?: string;

  constructor(data: any) {
    super();
    this.author = new Author({
      simpleText: data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.avatar);

    if (data.banner) {
      this.banner = Thumbnail.fromResponse(data.banner);
    }

    if (data.tv_banner) {
      this.tv_banner = Thumbnail.fromResponse(data.tvBanner);
    }

    if (data.mobile_banner) {
      this.mobile_banner = Thumbnail.fromResponse(data.mobileBanner);
    }

    if (data.subscriberCountText) {
      this.subscribers = new Text(data.subscriberCountText);
    }

    if (data.videosCountText) {
      this.videos_count = new Text(data.videosCountText);
    }

    if (data.sponsorButton) {
      this.sponsor_button = Parser.parseItem(data.sponsorButton, Button);
    }

    if (data.subscribeButton) {
      this.subscribe_button = Parser.parseItem(data.subscribeButton, SubscribeButton);
    }

    if (data.headerLinks) {
      this.header_links = Parser.parseItem(data.headerLinks, ChannelHeaderLinks);
    }

    if (data.channelHandleText) {
      this.channel_handle = new Text(data.channelHandleText);
    }

    if (data.channelId) {
      this.channel_id = data.channelId;
    }
  }
}

export default C4TabbedHeader;