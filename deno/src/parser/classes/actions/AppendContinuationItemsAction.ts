import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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