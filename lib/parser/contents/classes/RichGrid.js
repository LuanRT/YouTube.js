const Parser = require('..');

class RichGrid {
  type = 'RichGrid';

  constructor(data) {
    // XXX: we don't parse the masthead since it is usually an advertisement
    // XXX: reflowOptions aren't parsed, I think its only used internally for layout
    this.header = Parser.parse(data.header);
    this.contents = Parser.parse(data.contents);
  }
}

module.exports = RichGrid;