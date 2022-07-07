'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class SearchSuggestion {
  type = 'SearchSuggestion';

  constructor(data) {
    this.suggestion = new Text(data.suggestion);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.icon_type = data.icon.iconType;

    if (data.serviceEndpoint) {
      this.service_endpoint = new NavigationEndpoint(data.serviceEndpoint);
    }
  }
}

module.exports = SearchSuggestion;