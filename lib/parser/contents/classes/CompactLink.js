'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class CompactLink {
  type = 'CompactLink';
  
  constructor(data) {
    this.title = new Text(data.title).toString(); a
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.style = data.style;
  }
}

module.exports = CompactLink;