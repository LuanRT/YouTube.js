'use strict';

const Parser = require('../../..');
const NavigationEndpoint = require('../../NavigationEndpoint');
const Thumbnail = require('../../Thumbnail');
const Text = require('../../Text');

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

module.exports = LiveChatPaidSticker;