'use strict';

import Parser from '..';

class HorizontalList {
  type = 'HorizontalList';

  constructor(data) {
    this.visible_item_count = data.visibleItemCount;
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default HorizontalList;