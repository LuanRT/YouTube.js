const Author = require('./Author');
const Text = require('./Text');

class WatchCardRichHeader {
  type = 'WatchCardRichHeader';

  constructor(data) {
    this.title = new Text(data.title);
    this.title_endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
    this.subtitle = new Text(data.subtitle);
    this.author = new Author(item, [data.titleBadge], data.avatar);
    this.author.name = this.title;
    this.style = data.style;
  }
}

module.exports = WatchCardRichHeader;