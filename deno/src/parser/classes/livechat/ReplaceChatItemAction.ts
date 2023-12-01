import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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