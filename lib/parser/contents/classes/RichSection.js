const Parser = require('..');

class RichSection {
  type = 'RichSection';

  constructor(data) {
    this.contents = Parser.parse(data.contents);
  }
}

module.exports = RichSection;