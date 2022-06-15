'use strict';

const Parser = require('..');

class ExpandedShelfContents {
  type = 'ExpandedShelfContents';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
    this.contents = this.items; // XXX: alias for consistency
  }
}

module.exports = ExpandedShelfContents;