'use strict';

const Parser = require('..');
const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class VerticalWatchCardList {
  type = 'VerticalWatchCardList';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
    this.view_all_text = new Text(data.viewAllText);
    this.view_all_endpoint = new NavigationEndpoint(data.viewAllEndpoint);
  }
}

module.exports = VerticalWatchCardList;