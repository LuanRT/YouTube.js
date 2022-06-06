'use strict';

const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');

class Tab {
  type = 'tabRenderer';
  
  constructor(data) {
    this.title = data.title || 'N/A';
    this.selected = data.selected;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.content = Parser.parse(data.content);
  }
}

module.exports = Tab;