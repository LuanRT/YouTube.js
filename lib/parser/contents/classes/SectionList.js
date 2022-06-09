'use strict';

const Parser = require('..');

class SectionList {
  type = 'sectionListRenderer';
  
  constructor(data) {
    this.target_id = data.targetId || null;
    this.contents = Parser.parse(data.contents);
    this.header = Parser.parse(data.header);
  }
}

module.exports = SectionList;