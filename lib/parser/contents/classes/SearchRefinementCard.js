'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');
const Thumbnail = require('./Thumbnail');
const Text = require('./Text');

class SearchRefinementCard {
  type = 'SearchRefinementCard';

  constructor(data) {
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.endpoint = new NavigationEndpoint(data.searchEndpoint);
    this.query = new Text(data.query).toString();
  }
}

module.exports = SearchRefinementCard;