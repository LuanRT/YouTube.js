'use strict';

const Parser = require('..');

class Tabbed {
  type = 'Tabbed';

  constructor(data) {
    return Parser.parse(data);
  }
}

module.exports = Tabbed;