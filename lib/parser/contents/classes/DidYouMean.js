'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class DidYouMean {
  type = 'DidYouMean';
  
  constructor(data) {
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

module.exports = DidYouMean;