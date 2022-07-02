'use strict';

const Text = require('../../Text');
const Thumbnail = require('../../Thumbnail');
const NavigationEndpoint = require('../../NavigationEndpoint');
const Parser = require('../../..');

class LiveChatTickerPaidMessageItem {
  type = 'LiveChatTickerPaidMessageItem';

  constructor(data) {
    this.author = {
      id: data.authorExternalChannelId,
      thumbnails: Thumbnail.fromResponse(data.authorPhoto),
      badges: Parser.parse(data.authorBadges)
    };

    const badges = Parser.parse(data.authorBadges);

    this.author.badges = badges;
    this.author.is_moderator = badges?.some((badge) => badge.icon_type == 'MODERATOR') || null;
    this.author.is_verified = badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED') || null;
    this.author.is_verified_artist = badges?.some((badge) => badge.style == 'BADGE_STYLE_TYPE_VERIFIED_ARTIST') || null;

    this.amount = new Text(data.amount);
    this.duration_sec = data.durationSec;
    this.full_duration_sec = data.fullDurationSec;

    this.show_item = Parser.parse(data.showItemEndpoint.showLiveChatItemEndpoint.renderer, 'livechat/items');

    this.show_item_endpoint = new NavigationEndpoint(data.showItemEndpoint);
    this.id = data.id;
  }
}

module.exports = LiveChatTickerPaidMessageItem;