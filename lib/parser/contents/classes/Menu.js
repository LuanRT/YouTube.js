'use strict';

const Parser = require('..');

class Menu {
  type = 'Menu';

  constructor(data) {
    this.items = Parser.parse(data.items) || [];
    this.top_level_buttons = Parser.parse(data.topLevelButtons) || [];
    this.label = data.accessibility?.accessibilityData?.label || null;
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

module.exports = Menu;