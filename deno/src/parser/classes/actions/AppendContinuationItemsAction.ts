import { Parser } from '../../index.ts';
import type { RawNode } from '../../index.ts';
import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';

export default class AppendContinuationItemsAction extends YTNode {
  static type = 'AppendContinuationItemsAction';

  contents: ObservedArray<YTNode>;
  target: string;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.continuationItems);
    this.target = data.target;
  }
}