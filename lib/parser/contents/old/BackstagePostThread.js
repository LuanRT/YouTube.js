const Parser = require('..');

class BackstagePostThread {
  type = 'BackstagePostThread';

  constructor(item) {
    this.post = Parser.parseItem(item.post);
  }
}

module.exports = BackstagePostThread;