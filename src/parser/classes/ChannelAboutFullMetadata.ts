import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ChannelAboutFullMetadata extends YTNode {
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

  view_count: Text;
  joined_date: Text;
  description: Text;
  email_reveal: NavigationEndpoint;
  can_reveal_email: boolean;
  country: Text;
  buttons: ObservedArray<Button>;

  constructor(data: RawNode) {
    super();
    this.id = data.channelId;
    this.name = new Text(data.title);
    this.avatar = Thumbnail.fromResponse(data.avatar);
    this.canonical_channel_url = data.canonicalChannelUrl;

    this.primary_links = data.primaryLinks?.map((link: any) => ({
      endpoint: new NavigationEndpoint(link.navigationEndpoint),
      icon: Thumbnail.fromResponse(link.icon),
      title: new Text(link.title)
    })) ?? [];

    this.view_count = new Text(data.viewCountText);
    this.joined_date = new Text(data.joinedDateText);
    this.description = new Text(data.description);
    this.email_reveal = new NavigationEndpoint(data.onBusinessEmailRevealClickCommand);
    this.can_reveal_email = !data.signInForBusinessEmail;
    this.country = new Text(data.country);
    this.buttons = Parser.parseArray(data.actionButtons, Button);
  }
}