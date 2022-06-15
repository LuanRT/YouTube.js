'use strict';

const Parser = require('..');

class Menu {
  type = 'Menu';
  
  constructor(data) {
    this.items = Parser.parse(data.items) || [];
    this.contents = this.items; // XXX: alias for consistency
    this.top_level_buttons = Parser.parse(data.topLevelButtons) || [];
    this.label = data.accessibility?.accessibilityData?.label || null;
  }
}

module.exports = Menu;