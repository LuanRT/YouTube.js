'use strict';

import Parser from '../..';

class AddLiveChatTickerItemAction {
  type = 'AddLiveChatTickerItemAction';

  constructor(data) {
    this.item = Parser.parse(data.item, 'livechat/items');
    this.duration_sec = data.durationSec;
  }
}

export default AddLiveChatTickerItemAction;