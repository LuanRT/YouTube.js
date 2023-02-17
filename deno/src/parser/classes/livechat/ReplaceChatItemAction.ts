import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';

class ReplaceChatItemAction extends YTNode {
  static type = 'ReplaceChatItemAction';

  target_item_id: string;
  replacement_item;

  constructor(data: any) {
    super();
    this.target_item_id = data.targetItemId;
    this.replacement_item = Parser.parseItem(data.replacementItem);
  }
}

export default ReplaceChatItemAction;