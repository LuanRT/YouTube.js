'use strict';

const Parser = require('..');

class RichItem {
  type = 'RichItem';

  constructor(data) {
    return Parser.parse(data.content);
  }
}

module.exports = RichItem;