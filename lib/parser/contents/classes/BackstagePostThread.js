const Parser = require('..');

class BackstagePostThread {
  type = 'BackstagePostThread';

  constructor(data) {
    this.post = Parser.parseItem(data.post);
  }
}

module.exports = BackstagePostThread;