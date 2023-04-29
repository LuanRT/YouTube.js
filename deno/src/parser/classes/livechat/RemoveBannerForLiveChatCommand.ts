import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class RemoveBannerForLiveChatCommand extends YTNode {
  static type = 'RemoveBannerForLiveChatCommand';

  target_action_id: string;

  constructor(data: RawNode) {
    super();
    this.target_action_id = data.targetActionId;
  }
}