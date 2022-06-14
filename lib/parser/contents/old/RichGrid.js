const Parser = require('..');

class RichGrid {
  type = 'RichGrid';

  constructor(item) {
    // XXX: we don't parse the masthead since it is usually an advertisement
    // XXX: reflowOptions aren't parsed, I think its only used internally for layout
    this.header = Parser.parseItem(item.header);
    this.contents = Parser.parse(item.contents);
  }
}

module.exports = RichGrid;