'use strict';

const Parser = require('..');

class ProfileColumn {
  type = 'ProfileColumn';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
  }
}

module.exports = ProfileColumn;