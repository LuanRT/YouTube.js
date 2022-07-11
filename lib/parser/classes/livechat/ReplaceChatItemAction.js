'use strict';

const Parser = require('../..');

class ReplaceChatItemAction {
  constructor(data) {
    this.target_item_id = data.targetItemId;
    this.replacement_item = Parser.parse(data.replacementItem);
  }
}

module.exports = ReplaceChatItemAction;