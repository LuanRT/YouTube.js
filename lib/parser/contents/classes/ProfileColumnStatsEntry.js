'use strict';

const Text = require('./Text');

class ProfileColumnStatsEntry {
  type = 'profileColumnStatsEntryRenderer';
  
  constructor(data) {
    this.label = new Text(data.label);
    this.value = new Text(data.value);
  }
}

module.exports = ProfileColumnStatsEntry;