'use strict';

const Parser = require('..');

class ChipCloud {
  type = 'chipCloudRenderer';
  
  constructor(data) {
    this.chips = Parser.parse(data.chips);
    this.next_button = Parser.parse(data.nextButton);
    this.previous_button = Parser.parse(data.previousButton);
    this.horizontal_scrollable = data.horizontalScrollable;
  }
}

module.exports = ChipCloud;