const Parser = require('..');

class HorizontalList {
  type = 'HorizontalList';

  constructor(data) {
    this.visible_item_count = data.visibleItemCount;
    this.items = Parser.parse(data.items);
    this.contents = this.items; // XXX: alias for consistency
  }
}

module.exports = HorizontalList;