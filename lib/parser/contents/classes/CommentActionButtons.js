const Parser = require('..');

class CommentActionButtons {
  type = 'CommentActionButtons';

  constructor(data) {
    this.like = Parser.parse(data.likeButton);
    this.reply = Parser.parse(data.replyButton);
    this.dislike = Parser.parse(data.dislikeButton);
  }
}

module.exports = CommentActionButtons;