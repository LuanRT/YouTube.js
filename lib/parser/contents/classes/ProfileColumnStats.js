'use strict';

const Parser = require('..');

class ProfileColumnStats {
  type = 'ProfileColumnStats';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
    this.contents = this.items; // XXX: alias for consistency
  }
}

module.exports = ProfileColumnStats;