'use strict';

import Parser from '../../..';
import NavigationEndpoint from '../../NavigationEndpoint';
import Thumbnail from '../../Thumbnail';
import Text from '../../Text';

class LiveChatPaidSticker {
  type = 'LiveChatPaidSticker';

  constructor(data) {
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