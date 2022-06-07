'use strict';

const Parser = require('..');

class RelatedChipCloud {
  type = 'relatedChipCloudRenderer';
  
  constructor(data) {
    this.content = Parser.parse(data.content);
  }
}

module.exports = RelatedChipCloud;