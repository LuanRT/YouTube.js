const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');

class WatchCardHeroVideo {
  type = 'WatchCardHeroVideo';

  // TODO: is this all?
  constructor(data) {
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.collage = Parser.parseItem(data.heroImage);
  }
}

module.exports = WatchCardHeroVideo;