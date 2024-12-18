import { Parser } from '../../index.js';
import { type ObservedArray, YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class MultiPageMenuNotificationSection extends YTNode {
  static type = 'MultiPageMenuNotificationSection';

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