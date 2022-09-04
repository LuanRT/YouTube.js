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

  moneyChipBackgroundColor: number;
  moneyChipTextColor: number;
  backgroundColor: number;
  authorNameTextColor: number;
  sticker: Thumbnail[];
  purchase_amount: string;
  context_menu: NavigationEndpoint;
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

    this.moneyChipBackgroundColor = data.moneyChipBackgroundColor;
    this.moneyChipTextColor = data.moneyChipTextColor;
    this.backgroundColor = data.backgroundColor;
    this.authorNameTextColor = data.authorNameTextColor;
    this.sticker = Thumbnail.fromResponse(data.sticker);
    this.purchase_amount = new Text(data.purchaseAmountText).toString();
    this.context_menu = new NavigationEndpoint(data.contextMenuEndpoint);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
  }
}

export default LiveChatPaidSticker;