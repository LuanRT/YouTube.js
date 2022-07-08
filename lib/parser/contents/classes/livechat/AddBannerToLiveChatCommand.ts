'use strict';

import Parser from '../..';

class AddBannerToLiveChatCommand {
  constructor(data) {
    return Parser.parse(data.bannerRenderer, 'livechat/items');
  }
}

export default AddBannerToLiveChatCommand;