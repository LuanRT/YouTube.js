import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
class RemoveChatItemAction extends YTNode {
  static type = 'RemoveChatItemAction';

  target_item_id: string;

  constructor(data: RawNode) {
    super();
    this.target_item_id = data.targetItemId;
  }
}

export default RemoveChatItemAction;