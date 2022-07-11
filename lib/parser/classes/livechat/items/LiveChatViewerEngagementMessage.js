'use strict';

const LiveChatTextMessage = require('./LiveChatTextMessage');
const Parser = require('../../..');

class LiveChatViewerEngagementMessage extends LiveChatTextMessage {
  type = 'LiveChatViewerEngagementMessage';

  constructor(data) {
    super(data);

    delete this.author;
    delete this.menu_endpoint;

    this.icon_type = data.icon.iconType;
    this.action_button = Parser.parse(data.actionButton);
  }
}

module.exports = LiveChatViewerEngagementMessage;