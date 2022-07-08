'use strict';

const Parser = require('..');
const Thumbnail = require('./Thumbnail');
const Text = require('./Text');

class CommentReplyDialog {
  type = 'CommentReplyDialog';

  constructor(data) {
    this.reply_button = Parser.parse(data.replyButton);
    this.cancel_button = Parser.parse(data.cancelButton);
    this.author_thumbnail = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.error_message = new Text(data.errorMessage);
  }
}

module.exports = CommentReplyDialog;