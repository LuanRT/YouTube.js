const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class ReelShelf {
  type = 'ReelShelf';

  constructor(data) {
    this.title = new Text(data.title);
    this.items = Parser.parse(data.items);
    this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
    this.contents = this.items; // XXX: alias for consistency
  }
}

module.exports = ReelShelf;