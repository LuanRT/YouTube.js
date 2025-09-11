import { Parser } from '../../../index.ts';
import { YTNode } from '../../../helpers.ts';
import type { ObservedArray } from '../../../helpers.ts';
import type { RawNode } from '../../../index.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import Text from '../../misc/Text.ts';
import Thumbnail from '../../misc/Thumbnail.ts';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.ts';

export default class LiveChatSponsorshipsHeader extends YTNode {
  static type = 'LiveChatSponsorshipsHeader';

  author_name: Text;
  author_photo: Thumbnail[];
  author_badges: ObservedArray<LiveChatAuthorBadge>;
  primary_text: Text;
  menu_endpoint: NavigationEndpoint;
  context_menu_accessibility_label: string;
  image: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.author_name = new Text(data.authorName);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.author_badges = Parser.parseArray(data.authorBadges, LiveChatAuthorBadge);
    this.primary_text = new Text(data.primaryText);
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu_accessibility_label = data.contextMenuAccessibility.accessibilityData.label;
    this.image = Thumbnail.fromResponse(data.image);
  }
}