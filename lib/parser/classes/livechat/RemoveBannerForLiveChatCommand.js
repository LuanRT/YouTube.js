'use strict';

class RemoveBannerForLiveChatCommand {
  type = 'RemoveBannerForLiveChatCommand';

  constructor(data) {
    this.target_action_id = data.targetActionId;
  }
}

module.exports = RemoveBannerForLiveChatCommand;