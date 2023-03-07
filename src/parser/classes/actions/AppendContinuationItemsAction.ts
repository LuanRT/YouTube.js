import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

class AppendContinuationItemsAction extends YTNode {
  static type = 'AppendContinuationItemsAction';

  items;
  target: string;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parse(data.continuationItems);
    this.target = data.target;
  }
}

export default AppendContinuationItemsAction;