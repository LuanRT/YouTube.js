import Parser from '../index';
import { YTNode } from '../helpers';

class Grid extends YTNode {
  static type = 'Grid';

  constructor(data) {
    super();
    this.items = Parser.parse(data.items);
    this.is_collapsible = data.isCollapsible;
    this.visible_row_count = data.visibleRowCount;
    this.target_id = data.targetId;
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default Grid;