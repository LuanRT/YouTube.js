import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class MultiPageMenuNotificationSection extends YTNode {
  static type = 'MultiPageMenuNotificationSection';

  items;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parse(data.items);
  }

  get contents() {
    return this.items;
  }
}

export default MultiPageMenuNotificationSection;