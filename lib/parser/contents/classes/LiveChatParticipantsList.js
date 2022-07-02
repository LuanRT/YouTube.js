'use strict';

const Parser = require('..');
const Text = require('./Text');

class LiveChatParticipantsList {
  type = 'LiveChatParticipantsList';

  constructor(data) {
    this.title = new Text(data.title);
    this.participants = Parser.parse(data.participants);
  }
}

module.exports = LiveChatParticipantsList;