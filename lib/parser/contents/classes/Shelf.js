'use strict';

const Text = require('./Text');
const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');

class Shelf {
  type = 'Shelf';
  
  constructor(data) {
    this.title = new Text(data.title);
  
    data.endpoint &&
      (this.endpoint = new NavigationEndpoint(data.endpoint));
  
    this.content = Parser.parse(data.content) || [];
    
    data.icon?.iconType &&
      (this.icon_type = data.icon?.iconType);
      
    data.menu && 
      (this.menu = Parser.parse(data.menu));
  }
}

module.exports = Shelf;