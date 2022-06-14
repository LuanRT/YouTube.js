'use strict';

const Parser = require('..');

class ProfileColumn {
  type = 'profileColumnRenderer';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
  }
}

module.exports = ProfileColumn;