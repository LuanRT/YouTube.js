'use strict';

const Parser = require('..');
const Text = require('./Text');

class SubFeedSelector {
  type = 'SubFeedSelector';
  
  constructor(data) {
    this.title = new Text(data.title);
    this.options = Parser.parse(data.options);
  }
}

module.exports = SubFeedSelector;