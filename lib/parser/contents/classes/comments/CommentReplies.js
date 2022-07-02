'use strict';

const Parser = require('../..');

class CommentReplies {
  type = 'CommentReplies';

  constructor(data) {
    this.contents = Parser.parse(data.contents);
    this.view_replies = Parser.parse(data.viewReplies);
    this.hide_replies = Parser.parse(data.hideReplies);
  }
}

module.exports = CommentReplies;