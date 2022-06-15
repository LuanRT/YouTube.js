'use strict';

const Parser = require('..');

class ProfileColumn {
  type = 'ProfileColumn';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
    this.contents = this.items; // XXX: alias for consistency
  }
}

module.exports = ProfileColumn;