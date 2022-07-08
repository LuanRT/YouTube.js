'use strict';

const Parser = require('..');

class BackstagePostThread {
  type = 'BackstagePostThread';

  constructor(data) {
    this.post = Parser.parse(data.post);
  }
}

module.exports = BackstagePostThread;