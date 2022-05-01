const ResultsParser = require('.');

class Menu {
  type = 'Menu';

  constructor(item) {
    this.top_level_buttons = item.topLevelButtons && ResultsParser.parse(item.topLevelButtons);
    this.items = ResultsParser.parse(item.items);
  }
}

module.exports = Menu;