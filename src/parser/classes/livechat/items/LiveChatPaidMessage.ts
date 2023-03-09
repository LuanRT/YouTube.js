import { YTNode } from '../../../helpers.js';
import Text from '../../misc/Text.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import type { RawNode } from '../../../index.js';
import Author from '../../misc/Author.js';

class LiveChatPaidMessage extends YTNode {
  static type = 'LiveChatPaidMessage';

  message: Text;

  author: Author;

  header_background_color: number;
  header_text_color: number;
  body_background_color: number;
  body_text_color: number;
  purchase_amount: string;
  menu_endpoint: NavigationEndpoint;
  timestamp: number;
  timestamp_text: string;
  id: string;

  constructor(data: RawNode) {
    super();
    this.message = new Text(data.message);

    this.author = new Author(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);

    this.header_background_color = data.headerBackgroundColor;
    this.header_text_color = data.headerTextColor;
    this.body_background_color = data.bodyBackgroundColor;
    this.body_text_color = data.bodyTextColor;
    this.purchase_amount = new Text(data.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.timestamp_text = new Text(data.timestampText).toString();
    this.id = data.id;
  }
}

export default LiveChatPaidMessage;