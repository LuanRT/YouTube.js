const ResultsParser = require('.');
const NavigationEndpoint = require('./NavigationEndpoint');

class Tab {
  type = 'Tab';

  /**
   * @type {string}
   */
  title;

  constructor(item) {
    this.title = item.title;
    this.endpoint = item.endpoint ? new NavigationEndpoint(item.endpoint) : null;
    this.selected = item.selected; // if this.selected then we may have content else we do not
    this.content = item.content ? ResultsParser.parseItem(item.content) : null;
  }
}

module.exports = Tab;