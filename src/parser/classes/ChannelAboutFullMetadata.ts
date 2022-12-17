import Parser from '../index';

import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';

import type Button from './Button';

import { YTNode } from '../helpers';

class ChannelAboutFullMetadata extends YTNode {
  static type = 'ChannelAboutFullMetadata';

  id: string;
  name: Text;
  avatar: Thumbnail[];
  canonical_channel_url: string;

  primary_links: {
    endpoint: NavigationEndpoint;
    icon: Thumbnail[];
    title: Text;
  }[];

  views: Text;
  joined: Text;
  description: Text;
  email_reveal: NavigationEndpoint;
  can_reveal_email: boolean;
  country: Text;
  buttons: Button[];

  constructor(data: any) {
    super();
    this.id = data.channelId;
    this.name = new Text(data.title);
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.canonical_channel_url = data.canonicalChannelUrl;

    this.primary_links = data.primaryLinks.map((link: any) => ({
      endpoint: new NavigationEndpoint(link.navigationEndpoint),
      icon: Thumbnail.fromResponse(link.icon),
      title: new Text(link.title)
    }));

    this.views = new Text(data.viewCountText);
    this.joined = new Text(data.joinedDateText);
    this.description = new Text(data.description);
    this.email_reveal = new NavigationEndpoint(data.onBusinessEmailRevealClickCommand);
    this.can_reveal_email = !data.signInForBusinessEmail;
    this.country = new Text(data.country);
    this.buttons = Parser.parseArray<Button>(data.actionButtons);
  }
}

export default ChannelAboutFullMetadata;