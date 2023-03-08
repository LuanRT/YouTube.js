import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
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