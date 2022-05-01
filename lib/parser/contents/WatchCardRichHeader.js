const ResultsParser = require('.');
const Author = require('./Author');
const Text = require('./Text');

class WatchCardRichHeader {
  type = 'WatchCardRichHeader';

  constructor(item) {
    this.title = new Text(item.title);
    this.subtitle = new Text(item.subtitle);
    this.author = new Author(item, [item.titleBadge], item.avatar);
    this.author.name = this.title;
  }
}

module.exports = WatchCardRichHeader;