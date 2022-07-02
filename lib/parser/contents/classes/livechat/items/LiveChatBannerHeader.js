'use strict';

const Parser = require('../../..');
const Text = require('../../Text');

class LiveChatBannerHeader {
  type = 'LiveChatBannerHeader';

  constructor(data) {
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon.iconType;
    this.context_menu_button = Parser.parse(data.contextMenuButton);
  }
}

module.exports = LiveChatBannerHeader;