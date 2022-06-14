'use strict';

const Parser = require('..');

class ProfileColumnStats {
  type = 'profileColumnStatsRenderer';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
  }
}

module.exports = ProfileColumnStats;