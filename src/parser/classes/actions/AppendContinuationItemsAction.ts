import Parser from '../../index.js';
import type { RawNode } from '../../index.js';
import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';

export default class AppendContinuationItemsAction extends YTNode {
  static type = 'AppendContinuationItemsAction';

  contents: ObservedArray<YTNode> | null;
  target: string;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.continuationItems);
    this.target = data.target;
  }
}