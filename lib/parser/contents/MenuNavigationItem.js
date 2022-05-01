const ResultsParser = require('.');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class MenuNavigationItem {
  type = 'MenuNavigationItem';

  constructor(item) {
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    this.text = new Text(item.text);
  }
}

module.exports = MenuNavigationItem;