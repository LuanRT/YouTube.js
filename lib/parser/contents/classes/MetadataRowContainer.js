'use strict';

const Parser = require('..');

class MetadataRowContainer {
  type = 'MetadataRowContainer';
  
  constructor(data) {
    this.rows = Parser.parse(data.rows);
    this.collapsed_item_count = data.collapsedItemCount;
  }
}

module.exports = MetadataRowContainer;