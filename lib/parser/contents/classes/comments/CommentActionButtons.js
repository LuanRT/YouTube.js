'use strict';

const Parser = require('../..');

class CommentActionButtons {
  type = 'CommentActionButtons';

  constructor(data) {
    this.like_button = Parser.parse(data.likeButton);
    this.dislike_button = Parser.parse(data.dislikeButton);
    this.reply_button = Parser.parse(data.replyButton);
  }
}

module.exports = CommentActionButtons;