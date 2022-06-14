const Parser = require('..');

class Menu {
  type = 'Menu';

  constructor(item) {
    this.top_level_buttons = item.topLevelButtons && Parser.parse(item.topLevelButtons);
    this.items = Parser.parse(item.items);
  }
}

module.exports = Menu;