import { YTNode } from '../../helpers';

class RemoveChatItemAction extends YTNode {
  static type = 'RemoveChatItemAction';

  target_item_id: string;

  constructor(data: any) {
    super();
    this.target_item_id = data.targetItemId;
  }
}

export default RemoveChatItemAction;