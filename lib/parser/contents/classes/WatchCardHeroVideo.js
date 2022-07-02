'use strict';

const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');

class WatchCardHeroVideo {
  type = 'WatchCardHeroVideo';

  constructor(data) {
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.call_to_action_button = Parser.parse(data.callToActionButton);
    this.hero_image = Parser.parse(data.heroImage);
    this.label = data.accessibility.accessibilityData.label;
  }
}

module.exports = WatchCardHeroVideo;