'use strict';

const Parser = require('..');

class MerchandiseShelf {
  type = 'merchandiseShelfRenderer';
  
  constructor(data) {
    this.title = data.title;
    this.menu = Parser.parse(data.actionButton);
    this.items = Parser.parse(data.items);
  }
}

module.exports = MerchandiseShelf;