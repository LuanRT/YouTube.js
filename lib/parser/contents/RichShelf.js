const ResultsParser = require('.');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class RichShelf {
  type = 'RichShelf';

  constructor(item) {
    this.title = new Text(item.title);
    this.contents = ResultsParser.parse(item.contents);
    this.endpoint = item.endpoint ? new NavigationEndpoint(item.endpoint) : null;
  }
}

module.exports = RichShelf;