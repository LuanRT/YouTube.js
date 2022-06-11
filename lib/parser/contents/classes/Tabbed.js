'use strict';

const Parser = require('..');

class Tabbed {
  type = 'tabbedRenderer';
  
  constructor(data) {
    return Parser.parse(data);
  }
}

module.exports = Tabbed;