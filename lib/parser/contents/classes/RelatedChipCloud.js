'use strict';

const Parser = require('..');

class RelatedChipCloud {
  type = 'RelatedChipCloud';
  
  constructor(data) {
    this.content = Parser.parse(data.content);
  }
}

module.exports = RelatedChipCloud;