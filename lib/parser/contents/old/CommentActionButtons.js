const Parser = require('..');

class CommentActionButtons {
  type = 'CommentActionButtons';

  constructor(item) {
    this.like = Parser.parseItem(item.likeButton);
    this.reply = Parser.parseItem(item.replyButton);
    this.dislike = Parser.parseItem(item.dislikeButton);
  }
}

module.exports = CommentActionButtons;