import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class ReplaceChatItemAction extends YTNode {
  static type = 'ReplaceChatItemAction';

  target_item_id: string;
  replacement_item: YTNode;

  constructor(data: RawNode) {
    super();
    this.target_item_id = data.targetItemId;
    this.replacement_item = Parser.parseItem(data.replacementItem);
  }
}