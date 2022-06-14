const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');

class ExpandableTab {
  type = 'ExpandableTab';

  constructor(data) {
    this.title = data.title;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.selected = data.selected; // if this.selected then we may have content else we do not
    this.content = data.content ? Parser.parseItem(data.content) : null;
  }
}

module.exports = ExpandableTab;