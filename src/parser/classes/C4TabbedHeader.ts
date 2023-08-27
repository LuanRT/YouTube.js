import { YTNode } from '../helpers.js';
import Parser, { type RawNode } from '../index.js';
import Button from './Button.js';
import ChannelHeaderLinks from './ChannelHeaderLinks.js';
import ChannelHeaderLinksView from './ChannelHeaderLinksView.js';
import SubscribeButton from './SubscribeButton.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class C4TabbedHeader extends YTNode {
  static type = 'C4TabbedHeader';

  author: Author;
  banner?: Thumbnail[];
  tv_banner?: Thumbnail[];
  mobile_banner?: Thumbnail[];
  subscribers?: Text;
  videos_count?: Text;
  sponsor_button?: Button | null;
  subscribe_button?: SubscribeButton | Button | null;
  header_links?: ChannelHeaderLinks | ChannelHeaderLinksView | null;
  channel_handle?: Text;
  channel_id?: string;

  constructor(data: RawNode) {
    super();
    this.author = new Author({
      simpleText: data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.avatar);

    if (Reflect.has(data, 'banner')) {
      this.banner = Thumbnail.fromResponse(data.banner);
    }

    if (Reflect.has(data, 'tv_banner')) {
      this.tv_banner = Thumbnail.fromResponse(data.tvBanner);
    }

    if (Reflect.has(data, 'mobile_banner')) {
      this.mobile_banner = Thumbnail.fromResponse(data.mobileBanner);
    }

    if (Reflect.has(data, 'subscriberCountText')) {
      this.subscribers = new Text(data.subscriberCountText);
    }

    if (Reflect.has(data, 'videosCountText')) {
      this.videos_count = new Text(data.videosCountText);
    }

    if (Reflect.has(data, 'sponsorButton')) {
      this.sponsor_button = Parser.parseItem(data.sponsorButton, Button);
    }

    if (Reflect.has(data, 'subscribeButton')) {
      this.subscribe_button = Parser.parseItem(data.subscribeButton, [ SubscribeButton, Button ]);
    }

    if (Reflect.has(data, 'headerLinks')) {
      this.header_links = Parser.parseItem(data.headerLinks, [ ChannelHeaderLinks, ChannelHeaderLinksView ]);
    }

    if (Reflect.has(data, 'channelHandleText')) {
      this.channel_handle = new Text(data.channelHandleText);
    }

    if (Reflect.has(data, 'channelId')) {
      this.channel_id = data.channelId;
    }
  }
}