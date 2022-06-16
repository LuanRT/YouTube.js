'use strict';

const Parser = require('..');
const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class SearchBox {
  type = 'SearchBox';
  
  constructor(data) {
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.search_button = Parser.parse(data.searchButton);
    this.clear_button = Parser.parse(data.clearButton);
    this.placeholder_text = new Text(data.placeholderText);
  }
}

module.exports = SearchBox;