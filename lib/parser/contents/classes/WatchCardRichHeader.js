const Parser = require('..');
const Author = require('./Author');
const Text = require('./Text');

class WatchCardRichHeader {
  type = 'WatchCardRichHeader';

  constructor(data) {
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.author = new Author(item, [data.titleBadge], data.avatar);
    this.author.name = this.title;
  }
}

module.exports = WatchCardRichHeader;