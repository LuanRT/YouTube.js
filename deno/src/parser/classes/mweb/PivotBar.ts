import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import { Parser, type RawNode } from '../../index.ts';

export default class PivotBar extends YTNode {
  static type = 'PivotBar';

  public items: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
  }
}