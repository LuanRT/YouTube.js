const Parser = require('..');

class HorizontalList {
  type = 'HorizontalList';

  constructor(item) {
    this.visible_item_count = item.visibleItemCount;
    this.items = Parser.parse(item.items);
  }
}

module.exports = HorizontalList;