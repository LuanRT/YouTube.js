'use strict';

const Parser = require('../..');

class UpdateLiveChatPollAction {
  type = 'UpdateLiveChatPollAction';

  constructor(data) {
    this.poll_to_update = Parser.parse(data.pollToUpdate);
  }
}

module.exports = UpdateLiveChatPollAction;