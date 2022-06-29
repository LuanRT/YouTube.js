'use strict';

class LiveChatPlaceholderItem {
  type = 'LiveChatPlaceholderItem';
  
  constructor(data) {
    this.id = data.id;
    this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
  }
}

module.exports = LiveChatPlaceholderItem;