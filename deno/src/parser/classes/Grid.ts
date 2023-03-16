import Parser, { RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';

class Grid extends YTNode {
  static type = 'Grid';

  items;
  is_collapsible?: boolean;
  visible_row_count?: string;
  target_id?: string;
  continuation: string | null;
  header?;

  constructor(data: RawNode) {
    super();

    this.items = Parser.parseArray(data.items);

    if (data.header) {
      this.header = Parser.parseItem(data.header);
    }

    if (data.isCollapsible) {
      this.is_collapsible = data.isCollapsible;
    }

    if (data.visibleRowCount) {
      this.visible_row_count = data.visibleRowCount;
    }

    if (data.targetId) {
      this.target_id = data.targetId;
    }

    this.continuation = data.continuations?.[0]?.nextContinuationData?.continuation || null;
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default Grid;