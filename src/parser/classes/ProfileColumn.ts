import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class ProfileColumn extends YTNode {
  static type = 'ProfileColumn';

  public items: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}