'use strict';

const Parser = require('../..');

class AddChatItemAction {
  type = 'AddChatItemAction';

  constructor(data) {
    this.item = Parser.parse(data.item);
    this.client_id = data.clientId || null;
  }
}

module.exports = AddChatItemAction;