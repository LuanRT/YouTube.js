'use strict';

import Parser from '../..';

class ReplaceChatItemAction {
  constructor(data) {
    this.target_item_id = data.targetItemId;
    this.replacement_item = Parser.parse(data.replacementItem, 'livechat/items');
  }
}

export default ReplaceChatItemAction;