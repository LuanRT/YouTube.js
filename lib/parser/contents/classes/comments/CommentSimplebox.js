'use strict';

const Parser = require('../..');
const Thumbnail = require('../Thumbnail');
const Text = require('../Text');

class CommentSimplebox {
  type = 'CommentSimplebox';

  constructor(data) {
    this.submit_button = Parser.parse(data.submitButton);
    this.cancel_button = Parser.parse(data.cancelButton);
    this.author_thumbnails = Thumbnail.fromResponse(data.authorThumbnail);
    this.placeholder = new Text(data.placeholderText);
    this.avatar_size = data.avatarSize;
  }
}

module.exports = CommentSimplebox;