'use strict';

const Parser = require('../../..');
const Text = require('../../Text');
const Thumbnail = require('../../Thumbnail');
const NavigationEndpoint = require('../../NavigationEndpoint');

class LiveChatMembershipItem {
  type = 'LiveChatMembershipItem';

  constructor(data) {
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
    this.header_subtext = new Text(data.headerSubtext);

    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data?.authorName),
      thumbnails: Thumbnail.fromResponse(data.authorPhoto),
      badges: Parser.parse(data.authorBadges)
    };

    this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
  }
}

module.exports = LiveChatMembershipItem;