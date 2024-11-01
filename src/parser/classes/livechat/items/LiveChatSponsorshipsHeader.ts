import { Parser } from '../../../index.js';
import { YTNode } from '../../../helpers.js';
import type { ObservedArray } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Text from '../../misc/Text.js';
import Thumbnail from '../../misc/Thumbnail.js';
import LiveChatAuthorBadge from '../../LiveChatAuthorBadge.js';

export default class LiveChatSponsorshipsHeader extends YTNode {
  static type = 'LiveChatSponsorshipsHeader';

  author_name: Text;
  author_photo: Thumbnail[];
  primary_text: Text;
  author_badges: ObservedArray<LiveChatAuthorBadge> | null;
  menu_endpoint: NavigationEndpoint;
  context_menu_accessibility: {
    accessibility_data: {
      label: string
    }
  };
  image: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.author_name = new Text(data.authorName);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.primary_text = new Text(data.primaryText);
    this.author_badges = Parser.parse(data.authorBadges, true, LiveChatAuthorBadge);
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu_accessibility = {
      accessibility_data: {
        label: data.contextMenuAccessibility.accessibilityData.label
      }
    };
    this.image = Thumbnail.fromResponse(data.image);
  }
}
