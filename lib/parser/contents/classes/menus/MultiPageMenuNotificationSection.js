'use strict';

const Parser = require('../..');

class MultiPageMenuNotificationSection {
  type = 'MultiPageMenuNotificationSection';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
  }
  
  get contents() {
    return this.items;
  }
}

module.exports = MultiPageMenuNotificationSection;