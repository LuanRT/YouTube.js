'use strict';

const Parser = require('../..');

class LiveChatActionPanel {
  type = 'LiveChatActionPanel';

  constructor(data) {
    this.id = data.id;
    this.contents = Parser.parse(data.contents);
    this.target_id = data.targetId;
  }
}

module.exports = LiveChatActionPanel;