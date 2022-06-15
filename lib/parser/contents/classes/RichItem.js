const Parser = require('..');

class RichItem {
  type = 'RichItem';

  constructor(data) {
    this.content = Parser.parse(data.content);
  }
}

module.exports = RichItem;