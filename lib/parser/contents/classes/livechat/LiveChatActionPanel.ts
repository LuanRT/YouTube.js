'use strict';

import Parser from '../..';

class LiveChatActionPanel {
  type = 'LiveChatActionPanel';

  constructor(data) {
    this.id = data.id;
    this.contents = Parser.parse(data.contents, 'livechat/items');
    this.target_id = data.targetId;
  }
}

export default LiveChatActionPanel;