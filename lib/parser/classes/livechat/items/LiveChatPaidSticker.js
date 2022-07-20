import Parser from '../../../index';
import NavigationEndpoint from '../../NavigationEndpoint';
import Thumbnail from '../../misc/Thumbnail';
import Text from '../../misc/Text';

import { YTNode } from '../../../helpers';
class LiveChatPaidSticker extends YTNode {
  static type = 'LiveChatPaidSticker';
  constructor(data) {
    super();
    this.id = data.id;
    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data.authorName),
      thumbnails: Thumbnail.fromResponse(data.authorPhoto),
      badges: Parser.parse(data.authorBadges)
    };
    this.sticker = Thumbnail.fromResponse(data.sticker);
    this.purchase_amount = new Text(data.purchaseAmountText).toString();
    this.context_menu = new NavigationEndpoint(data.contextMenuEndpoint);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
  }
}
export default LiveChatPaidSticker;
