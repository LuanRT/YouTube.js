'use strict';

const Parser = require('..');
const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class WatchCardRichHeader {
  type = 'WatchCardRichHeader';
  
  constructor(data) {
    this.title = new Text(data.title);
    this.title_endpoint = new NavigationEndpoint(data.titleNavigationEndpoint);
    this.subtitle = new Text(data.subtitle);
    this.style = data.style;
  }
}

module.exports = WatchCardRichHeader;