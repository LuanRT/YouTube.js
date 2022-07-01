'use strict';

const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');

class ContinuationItem {
  type = 'ContinuationItem';
  
  constructor(data) {
    this.trigger = data.trigger;
   
    data.button &&
      (this.button = Parser.parse(data.button));
      
    this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
  }
}

module.exports = ContinuationItem;