import Parser from '../../../index';
import NavigationEndpoint from '../../NavigationEndpoint';
import Thumbnail from '../../misc/Thumbnail';
import Text from '../../misc/Text';
import { YTNode } from '../../../helpers';

class LiveChatPaidSticker extends YTNode {
  static type = 'LiveChatPaidSticker';

  id: string;

  author: {
    id: string;
    name: Text;
    thumbnails: Thumbnail[];
    badges: any;
  };

  money_chip_background_color: number;
  money_chip_text_color: number;
  background_color: number;
  author_name_text_color: number;
  sticker: Thumbnail[];
  purchase_amount: string;
  context_menu: NavigationEndpoint;
  menu_endpoint?: NavigationEndpoint;
  timestamp: number;

  constructor(data: any) {
    super();
    this.id = data.id;

    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data.authorName),
      thumbnails: Thumbnail.fromResponse(data.authorPhoto),
      badges: Parser.parse(data.authorBadges)
    };

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