import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class Grid extends YTNode {
  static type = 'Grid';

  items;
  is_collapsible?: boolean;
  visible_row_count?: string;
  target_id?: string;
  continuation: string | null;
  header?;

  constructor(data: any) {
    super();

    this.items = Parser.parseArray(data.items);

    if (data.header) {
      this.header = Parser.parse(data.header);
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