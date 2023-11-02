import { Parser } from '../../index.js';
import { type SuperParsedResult, YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class MultiPageMenuNotificationSection extends YTNode {
  static type = 'MultiPageMenuNotificationSection';

  items: SuperParsedResult<YTNode>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parse(data.items);
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}