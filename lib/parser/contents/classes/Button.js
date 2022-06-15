'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class Button {
  type = 'Button';
  
  constructor(data) {
    this.text = new Text(data.text).toString();
    this.label = data.accessibility?.label || null;
    this.tooltip = data.tooltip || null;
    this.icon_type = data.icon?.iconType || null;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
  }
}

module.exports = Button;