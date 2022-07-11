'use strict';

const Parser = require('..');

class SecondarySearchContainer {
  type = 'SecondarySearchContainer';

  constructor(data) {
    this.contents = Parser.parse(data.contents);
  }
}

module.exports = SecondarySearchContainer;