'use strict';

const Parser = require('../..');
const Text = require('../Text');

class SimpleMenuHeader {
  type = 'SimpleMenuHeader';
  
  constructor(data) {
    this.title = new Text(data.title);
    this.buttons = Parser.parse(data.buttons);
  }
}

module.exports = SimpleMenuHeader;