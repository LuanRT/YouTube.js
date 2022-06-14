const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class Shelf {
  type = 'Shelf';

  constructor(item) {
    this.title = new Text(item.title);
    this.content = Parser.parseItem(item.content);
    this.endpoint = item.endpoint ? new NavigationEndpoint(item.endpoint) : null;
    // XXX: maybe add this as buttonRenderer?
    // this is the playAllButton in the original response
    this.button = item.playAllButton && Parser.parseItem(item.playAllButton);
  }
}

module.exports = Shelf;