'use strict';

import Parser from '../..';

class UpdateLiveChatPollAction {
  type = 'UpdateLiveChatPollAction';

  constructor(data) {
    this.poll_to_update = Parser.parse(data.pollToUpdate, 'livechat/items');
  }
}

export default UpdateLiveChatPollAction;