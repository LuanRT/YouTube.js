const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class RichShelf {
  type = 'RichShelf';

  constructor(item) {
    this.title = new Text(item.title);
    this.contents = Parser.parse(item.contents);
    this.endpoint = item.endpoint ? new NavigationEndpoint(item.endpoint) : null;
  }
}

module.exports = RichShelf;