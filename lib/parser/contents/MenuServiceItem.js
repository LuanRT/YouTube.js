const ResultsParser = require('.');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class MenuServiceItem {
  type = 'MenuServiceItem';

  constructor(item) {
    this.endpoint = new NavigationEndpoint(item.serviceEndpoint);
    this.text = new Text(item.text);
    // TODO: icons?
  }
}

module.exports = MenuServiceItem;