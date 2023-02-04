import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class HorizontalList extends YTNode {
  static type = 'HorizontalList';

  visible_item_count: string;
  items;

  constructor(data: any) {
    super();
    this.visible_item_count = data.visibleItemCount;
    this.items = Parser.parseArray(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default HorizontalList;