'use strict';

const Text = require('../../Text');
const Thumbnail = require('../../Thumbnail');
const NavigationEndpoint = require('../../NavigationEndpoint');
const Parser = require('../../..');

class LiveChatPaidMessage {
  type = 'LiveChatPaidMessage';

  constructor(data) {
    this.message = new Text(data.message);

    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data.authorName),
      thumbnails: Thumbnail.fromResponse(data.authorPhoto),
      badges: Parser.parse(data.authorBadges)
    };

    const badges = Parser.parse(data.authorBadges);

    this.author.badges = badges;
    this.author.is_moderator = badges?.some((badge) => badge.icon_type == 'MODERATOR') || null;
    this.author.is_verified = badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') || null;
    this.author.is_verified_artist = badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST') || null;

    this.purchase_amount = new Text(data.purchaseAmountText).toString();

    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.timestamp_text = new Text(data.timestampText).toString();
    this.id = data.id;
  }
}

module.exports = LiveChatPaidMessage;