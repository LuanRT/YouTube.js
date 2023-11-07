import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import CompactLink from '../CompactLink.js';
import type { ObservedArray } from '../../helpers.js';

export default class MultiPageMenuSection extends YTNode {
  static type = 'MultiPageMenuSection';

  items: ObservedArray<CompactLink> | null;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parse(data.items, true, [ CompactLink ]);
  }
}