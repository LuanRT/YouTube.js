'use strict';

const Parser = require('..');

class ItemSection {
  type = 'itemSectionRenderer';
  
  constructor(data) {
    this.header = Parser.parse(data.header);
    this.target_id = data.targetId || data.sectionIdentifier || null;
    this.contents = Parser.parse(data.contents);
  }
}

module.exports = ItemSection;