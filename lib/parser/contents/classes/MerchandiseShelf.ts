'use strict';

import Parser from '..';

class MerchandiseShelf {
  type = 'MerchandiseShelf';

  constructor(data) {
    this.title = data.title;
    this.menu = Parser.parse(data.actionButton);
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default MerchandiseShelf;