'use strict';

const Parser = require('../..');

class AddChatItemAction {
  type = 'AddChatItemAction';
  
  constructor(data) {
    this.item = Parser.parse(data.item, 'actions/messages');
    this.client_id = data.clientId;
  }
}

module.exports = AddChatItemAction;