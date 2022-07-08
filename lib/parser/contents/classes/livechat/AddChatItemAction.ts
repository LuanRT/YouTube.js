'use strict';

import Parser from '../..';

class AddChatItemAction {
  type = 'AddChatItemAction';

  constructor(data) {
    this.item = Parser.parse(data.item, 'livechat/items');
    this.client_id = data.clientId || null;
  }
}

export default AddChatItemAction;