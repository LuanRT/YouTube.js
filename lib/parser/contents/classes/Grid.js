'use strict';

const Parser = require('..');

class Grid {
  type = 'gridRenderer';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
    this.is_collapsible = data.isCollapsible;
    this.visible_row_count = data.visibleRowCount;
    this.target_id = data.targetId;
  }
}

module.exports = Grid;