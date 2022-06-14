'use strict';

const Parser = require('..');

class MerchandiseShelf {
  type = 'MerchandiseShelf';
  
  constructor(data) {
    this.title = data.title;
    this.menu = Parser.parse(data.actionButton);
    this.items = Parser.parse(data.items);
  }
}

module.exports = MerchandiseShelf;