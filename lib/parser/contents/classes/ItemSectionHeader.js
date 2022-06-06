'use strict';

const Text = require('./Text');

class ItemSectionHeader {
  constructor(data) {
    this.title = new Text(data.title);
  }
}

module.exports = ItemSectionHeader;