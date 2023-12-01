import { Parser, type RawNode } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';

export default class HorizontalList extends YTNode {
  static type = 'HorizontalList';

  visible_item_count: string;
  items: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.visible_item_count = data.visibleItemCount;
    this.items = Parser.parseArray(data.items);
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}