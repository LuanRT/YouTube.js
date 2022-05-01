const ResultsParser = require('.');
const NavigationEndpoint = require('./NavigationEndpoint');

class WatchCardHeroVideo {
  type = 'WatchCardHeroVideo';

  // TODO: is this all?
  constructor(item) {
    this.endpoint = new NavigationEndpoint(item.navigationEndpoint);
    this.collage = ResultsParser.parseItem(item.heroImage);
  }
}

module.exports = WatchCardHeroVideo;