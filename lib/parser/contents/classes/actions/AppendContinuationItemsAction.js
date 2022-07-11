'use strict';

const Parser = require('../..');

class AppendContinuationItemsAction {
  type = 'AppendContinuationItemsAction';
  
  constructor(data) {
    this.items = Parser.parse(data.continuationItems);
    this.target = data.target;
  }
}

module.exports = AppendContinuationItemsAction;