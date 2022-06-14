'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class DidYouMean {
  type = 'didYouMeanRenderer';
  
  constructor(data) {
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

module.exports = DidYouMean;