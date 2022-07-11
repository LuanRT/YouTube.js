'use strict';

const Parser = require('../..');

class MultiPageMenu {
  type = 'MultiPageMenu';

  constructor(data) {
    this.header = Parser.parse(data.header);
    this.sections = Parser.parse(data.sections);
    this.style = data.style;
  }
}

module.exports = MultiPageMenu;