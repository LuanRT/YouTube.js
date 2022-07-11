'use strict';

const Parser = require('..');

class ProfileColumn {
  type = 'ProfileColumn';

  constructor(data) {
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

module.exports = ProfileColumn;