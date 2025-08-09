import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import { Parser, type RawNode } from '../../index.js';

export default class PivotBar extends YTNode {
  static type = 'PivotBar';

  public items: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
  }
}