import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import { Parser, type RawNode } from '../../index.ts';

export default class MultiPageMenuSection extends YTNode {
  static type = 'MultiPageMenuSection';

  public items: ObservedArray<YTNode> | null;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
  }
}