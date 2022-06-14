const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class ReelShelf {
  type = 'ReelShelf';

  constructor(item) {
    this.title = new Text(item.title);
    this.items = Parser.parse(item.items);
    this.endpoint = item.endpoint ? new NavigationEndpoint(item.endpoint) : null;
  }
}

module.exports = ReelShelf;