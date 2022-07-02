'use strict';

const Parser = require('..');

class ProfileColumnStats {
  type = 'ProfileColumnStats';

  constructor(data) {
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

module.exports = ProfileColumnStats;