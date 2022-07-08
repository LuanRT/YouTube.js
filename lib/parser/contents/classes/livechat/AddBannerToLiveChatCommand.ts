'use strict';

const Parser = require('../..');

class AddBannerToLiveChatCommand {
  constructor(data) {
    return Parser.parse(data.bannerRenderer, 'livechat/items');
  }
}

module.exports = AddBannerToLiveChatCommand;