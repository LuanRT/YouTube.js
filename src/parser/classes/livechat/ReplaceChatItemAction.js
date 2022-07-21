import Parser from '../../index';
import { YTNode } from '../../helpers';

class ReplaceChatItemAction extends YTNode {
  static type = 'ReplaceChatItemAction';

  constructor(data) {
    super();
    this.target_item_id = data.targetItemId;
    this.replacement_item = Parser.parse(data.replacementItem);
  }
}

export default ReplaceChatItemAction;