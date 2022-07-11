'use strict';

const Text = require('./Text');
const Parser = require('..');
const Thumbnail = require('./Thumbnail');

class LiveChatMessageInput {
  constructor(data) {
    this.author_name = new Text(data.authorName);
    this.author_photo = Thumbnail.fromResponse(data.authorPhoto);
    this.send_button = Parser.parse(data.sendButton);
    this.target_id = data.targetId;
  }
}

module.exports = LiveChatMessageInput;