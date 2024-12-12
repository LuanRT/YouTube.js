import { YTNode } from '../../../helpers.ts';
import type { RawNode } from '../../../index.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import Author from '../../misc/Author.ts';
import Text from '../../misc/Text.ts';

export default class LiveChatMembershipItem extends YTNode {
  static type = 'LiveChatMembershipItem';

  id: string;
  timestamp: number;
  timestamp_usec: string;
  timestamp_text?: Text;
  header_primary_text?: Text;
  header_subtext: Text;
  message?: Text;
  author: Author;
  menu_endpoint: NavigationEndpoint;
  context_menu_accessibility_label: string;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.timestamp_usec = data.timestampUsec;

    if (Reflect.has(data, 'timestampText')) {
      this.timestamp_text = new Text(data.timestampText);
    }

    if (Reflect.has(data, 'headerPrimaryText')) {
      this.header_primary_text = new Text(data.headerPrimaryText);
    }

    this.header_subtext = new Text(data.headerSubtext);

    if (Reflect.has(data, 'message')) {
      this.message = new Text(data.message);
    }

    this.author = new Author(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu_accessibility_label = data.contextMenuAccessibility.accessibilityData.label;
  }
}