const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class ReelShelf {
  type = 'ReelShelf';

  constructor(data) {
    this.title = new Text(data.title);
    this.items = Parser.parse(data.items);
    this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
  }
  
  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

module.exports = ReelShelf;