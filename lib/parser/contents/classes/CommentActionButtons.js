const Parser = require('..');

class CommentActionButtons {
  type = 'CommentActionButtons';

  constructor(data) {
    this.like = Parser.parseItem(data.likeButton);
    this.reply = Parser.parseItem(data.replyButton);
    this.dislike = Parser.parseItem(data.dislikeButton);
  }
}

module.exports = CommentActionButtons;