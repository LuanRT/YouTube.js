'use strict';

const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');

class Tab {
  type = 'Tab';
  
  constructor(data) {
    this.title = data.title || 'N/A';
    this.selected = data.selected || false;
    this.endpoint = new NavigationEndpoint(data.endpoint);
    this.content = Parser.parse(data.content);
  }
}

module.exports = Tab;