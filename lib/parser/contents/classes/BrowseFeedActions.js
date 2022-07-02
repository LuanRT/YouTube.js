'use strict';

const Parser = require('..');

class BrowseFeedActions {
  type = 'BrowseFeedActions';

  constructor(data) {
    this.contents = Parser.parse(data.contents);
  }
}

module.exports = BrowseFeedActions;