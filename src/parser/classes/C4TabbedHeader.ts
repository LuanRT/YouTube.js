import Parser from '../index';
import Author from './misc/Author';
import Thumbnail from './misc/Thumbnail';
import Text from './misc/Text';
import { YTNode } from '../helpers';

class C4TabbedHeader extends YTNode {
  static type = 'C4TabbedHeader';

  author;
  banner;
  tv_banner;
  mobile_banner;
  subscribers;
  sponsor_button;
  subscribe_button;
  header_links;

  constructor(data: any) {
    super();
    this.author = new Author({
      simpleText: data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.badges, data.avatar);

    this.banner = data.banner ? Thumbnail.fromResponse(data.banner) : [];
    this.tv_banner = data.tvBanner ? Thumbnail.fromResponse(data.tvBanner) : [];
    this.mobile_banner = data.mobileBanner ? Thumbnail.fromResponse(data.mobileBanner) : [];
    this.subscribers = new Text(data.subscriberCountText);
    this.sponsor_button = data.sponsorButton ? Parser.parseItem(data.sponsorButton) : undefined;
    this.subscribe_button = data.subscribeButton ? Parser.parseItem(data.subscribeButton) : undefined;
    this.header_links = data.headerLinks ? Parser.parse(data.headerLinks) : undefined;
  }
}

export default C4TabbedHeader;