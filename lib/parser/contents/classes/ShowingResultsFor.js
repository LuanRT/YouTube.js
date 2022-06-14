'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class ShowingResultsFor {
  type = 'showingResultsForRenderer';
  
  constructor(data) {
    this.corrected_query = new Text(data.correctedQuery);
    this.endpoint = new NavigationEndpoint(data.correctedQueryEndpoint);
    this.original_query_endpoint = new NavigationEndpoint(data.originalQueryEndpoint);
  }
}

module.exports = ShowingResultsFor;