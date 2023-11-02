import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class Grid extends YTNode {
  static type = 'Grid';

  items: ObservedArray<YTNode>;
  is_collapsible?: boolean;
  visible_row_count?: string;
  target_id?: string;
  continuation: string | null;
  header?: YTNode;

  constructor(data: RawNode) {
    super();

    this.items = Parser.parseArray(data.items);

    if (Reflect.has(data, 'header')) {
      this.header = Parser.parseItem(data.header);
    }

    if (Reflect.has(data, 'isCollapsible')) {
      this.is_collapsible = data.isCollapsible;
    }

    if (Reflect.has(data, 'visibleRowCount')) {
      this.visible_row_count = data.visibleRowCount;
    }

    if (Reflect.has(data, 'targetId')) {
      this.target_id = data.targetId;
    }

    this.continuation = data.continuations?.[0]?.nextContinuationData?.continuation || null;
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}