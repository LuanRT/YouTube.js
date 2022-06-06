'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');

class ContinuationItem {
  type = 'continuationItemRenderer';
  
  constructor(data) {
    this.trigger = data.trigger;
    this.endpoint = new NavigationEndpoint(data.continuationEndpoint);
  }
}

module.exports = ContinuationItem;