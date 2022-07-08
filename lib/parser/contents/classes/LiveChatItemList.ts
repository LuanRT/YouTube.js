'use strict';

const Parser = require('..');

class LiveChatItemList {
  type = 'LiveChatItemList';

  constructor(data) {
    this.max_items_to_display = data.maxItemsToDisplay;
    this.more_comments_below_button = Parser.parse(data.moreCommentsBelowButton);
  }
}

module.exports = LiveChatItemList;