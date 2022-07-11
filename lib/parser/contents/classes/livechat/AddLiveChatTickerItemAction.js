'use strict';

const Parser = require('../..');

class AddLiveChatTickerItemAction {
  type = 'AddLiveChatTickerItemAction';

  constructor(data) {
    this.item = Parser.parse(data.item);
    this.duration_sec = data.durationSec;
  }
}

module.exports = AddLiveChatTickerItemAction;