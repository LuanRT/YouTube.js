import { YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import Button from './Button.ts';
import ChannelHeaderLinks from './ChannelHeaderLinks.ts';
import ChannelHeaderLinksView from './ChannelHeaderLinksView.ts';
import SubscribeButton from './SubscribeButton.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

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