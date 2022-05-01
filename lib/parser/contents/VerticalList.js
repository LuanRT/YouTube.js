const ResultsParser = require('.');

class VerticalList {
  type = 'VerticalList';

  constructor(item) {
    this.collapsed_item_count = item.collapsedItemCount;
    this.items = ResultsParser.parse(item.items);
  }
}

module.exports = VerticalList;