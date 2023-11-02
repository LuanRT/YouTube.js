import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';

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