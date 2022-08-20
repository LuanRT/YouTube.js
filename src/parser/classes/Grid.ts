import Parser from '../index';
import { YTNode } from '../helpers';

class Grid extends YTNode {
  static type = 'Grid';

  items;
  is_collapsible: boolean;
  visible_row_count: string;
  target_id: string;
  continuation: string | null;
  header?;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.items);
    this.is_collapsible = data.isCollapsible;
    this.visible_row_count = data.visibleRowCount;
    this.target_id = data.targetId;
    this.continuation = data.continuations?.[0]?.nextContinuationData?.continuation || null;

    if (data.header) {
      this.header = Parser.parse(data.header);
    }
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default Grid;