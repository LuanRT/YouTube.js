import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class RemoveBannerForLiveChatCommand extends YTNode {
  static type = 'RemoveBannerForLiveChatCommand';

  target_action_id: string;

  constructor(data: RawNode) {
    super();
    this.target_action_id = data.targetActionId;
  }
}

export default RemoveBannerForLiveChatCommand;