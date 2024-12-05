import { YTNode } from '../../../helpers.ts';
import type { RawNode } from '../../../index.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import Author from '../../misc/Author.ts';
import Text from '../../misc/Text.ts';

export default class LiveChatSponsorshipsGiftRedemptionAnnouncement extends YTNode {
  static type = 'LiveChatSponsorshipsGiftRedemptionAnnouncement';

  id: string;
  timestamp_usec: string;
  timestamp_text: Text;
  author: Author;
  message: Text;
  menu_endpoint: NavigationEndpoint;
  context_menu_accessibility_label: string;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.timestamp_usec = data.timestampUsec;
    this.timestamp_text = new Text(data.timestampText);

    this.author = new Author(
      data.authorName,
      data.authorBadges,
      data.authorPhoto,
      data.authorExternalChannelId
    );

    this.message = new Text(data.message);
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu_accessibility_label = data.contextMenuAccessibility.accessibilityData.label;
  }
}