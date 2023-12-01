import { Parser } from '../../index.ts';
import { type SuperParsedResult, YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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