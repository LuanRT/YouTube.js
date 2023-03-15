import { YTNode } from '../../../helpers.js';
import Text from '../../misc/Text.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import type { RawNode } from '../../../index.js';
import Author from '../../misc/Author.js';
class LiveChatMembershipItem extends YTNode {
  static type = 'LiveChatMembershipItem';

  id: string;
  timestamp: number;
  header_subtext: Text;

  author: Author;

  menu_endpoint: NavigationEndpoint;

  constructor(data: RawNode) {
    super();
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.header_subtext = new Text(data.headerSubtext);

    this.author = new Author(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);

    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
  }
}

export default LiveChatMembershipItem;