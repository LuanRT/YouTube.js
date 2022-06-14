'use strict';

const Parser = require('..');
const Text = require('./Text');

class VerticalList {
  type = 'verticalListRenderer';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
    this.collapsed_item_count = data.collapsedItemCount;
    this.collapsed_state_button_text = new Text(data.collapsedStateButtonText);
  }
}

module.exports = VerticalList;