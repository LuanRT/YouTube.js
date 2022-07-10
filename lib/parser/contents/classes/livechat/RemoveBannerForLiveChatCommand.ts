'use strict';

class RemoveBannerForLiveChatCommand {
  type = 'RemoveBannerForLiveChatCommand';

  constructor(data) {
    this.target_action_id = data.targetActionId;
  }
}

export default RemoveBannerForLiveChatCommand;