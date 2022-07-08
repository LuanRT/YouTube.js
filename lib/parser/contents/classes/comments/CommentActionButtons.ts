'use strict';

import Parser from '../..';

class CommentActionButtons {
  type = 'CommentActionButtons';

  constructor(data) {
    this.like_button = Parser.parse(data.likeButton);
    this.dislike_button = Parser.parse(data.dislikeButton);
    this.reply_button = Parser.parse(data.replyButton);
  }
}

export default CommentActionButtons;