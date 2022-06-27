'use strict';

const Text = require('../Text');

class MarkChatItemsByAuthorAsDeletedAction {
  type = 'MarkChatItemsByAuthorAsDeletedAction';
  
  constructor(data) {
    this.deleted_state_message = new Text(data.deletedStateMessage);
    this.channel_id = data.externalChannelId;
  }
}

module.exports = MarkChatItemsByAuthorAsDeletedAction;