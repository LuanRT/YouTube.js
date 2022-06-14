'use strict';

const Parser = require('..');

class Menu {
  type = 'Menu';
  
  constructor(data) {
    this.items = Parser.parse(data.items) || [];
    this.top_level_buttons = Parser.parse(data.topLevelButtons) || [];
    this.label = data.accessibility?.accessibilityData?.label || null;
  }
}

module.exports = Menu;