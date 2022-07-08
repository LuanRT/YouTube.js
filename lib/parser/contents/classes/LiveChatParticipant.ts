'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class LiveChatParticipant {
  type = 'LiveChatParticipant';

  constructor(data) {
    this.name = new Text(data.authorName);
    this.photo = Thumbnail.fromResponse(data.authorPhoto);
    this.badges = Parser.parse(data.authorBadges);
  }
}

module.exports = LiveChatParticipant;