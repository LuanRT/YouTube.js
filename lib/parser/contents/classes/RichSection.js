'use strict';

const Parser = require('..');

class RichSection {
  type = 'RichSection';

  constructor(data) {
    this.contents = Parser.parse(data.content);
  }
}

module.exports = RichSection;