import { YTNode } from '../../../helpers.ts';
import Text from '../../misc/Text.ts';
import Thumbnail from '../../misc/Thumbnail.ts';
import NavigationEndpoint from '../../NavigationEndpoint.ts';
import type { RawNode } from '../../../index.ts';
import Author from '../../misc/Author.ts';

class LiveChatPaidSticker extends YTNode {
  static type = 'LiveChatPaidSticker';

  id: string;

  author: Author;

  money_chip_background_color: number;
  money_chip_text_color: number;
  background_color: number;
  author_name_text_color: number;
  sticker: Thumbnail[];
  purchase_amount: string;
  context_menu: NavigationEndpoint;
  menu_endpoint?: NavigationEndpoint;
  timestamp: number;

  constructor(data: RawNode) {
    super();
    this.id = data.id;

    this.author = new Author(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);

    this.money_chip_background_color = data.moneyChipBackgroundColor;
    this.money_chip_text_color = data.moneyChipTextColor;
    this.background_color = data.backgroundColor;
    this.author_name_text_color = data.authorNameTextColor;
    this.sticker = Thumbnail.fromResponse(data.sticker);
    this.purchase_amount = new Text(data.purchaseAmountText).toString();
    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.context_menu = this.menu_endpoint;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
  }
}

export default LiveChatPaidSticker;