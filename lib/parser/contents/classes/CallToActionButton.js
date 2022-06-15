'use strict';

const Parser = require('..');
const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class CallToActionButton {
  type = 'CallToActionButton';
  
  constructor(data) {
    this.label = new Text(data.label);
    this.icon_type = data.icon.iconType;
    this.style = data.style;
  }
}

module.exports = CallToActionButton;