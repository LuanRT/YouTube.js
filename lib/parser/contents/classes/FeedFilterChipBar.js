const Parser = require('..');

class FeedFilterChipBar {
  type = 'FeedFilterChipBar';

  constructor(data) {
    this.contents = Parser.parse(data.contents);
  }
}

module.exports = FeedFilterChipBar;