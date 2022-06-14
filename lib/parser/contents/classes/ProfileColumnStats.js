'use strict';

const Parser = require('..');

class ProfileColumnStats {
  type = 'ProfileColumnStats';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
  }
}

module.exports = ProfileColumnStats;