const ResultsParser = require('.');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class SearchRefinementCard {
  type = 'SearchRefinementCard';

  constructor(item) {
    this.thumbnail = Thumbnail.fromResponse(item.thumbnail);
    this.endpoint = new NavigationEndpoint(item.searchEndpoint);
    this.query = new Text(item.query);
    // XXX: is this actually useful?
    this.style = item.searchRefinementCardRendererStyle?.value;
  }
}

module.exports = SearchRefinementCard;