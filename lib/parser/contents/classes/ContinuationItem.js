'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');

class ContinuationItem {
  type = 'ContinuationItem';
  
  constructor(data) {
    this.trigger = data.trigger;
    this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
  }
}

module.exports = ContinuationItem;