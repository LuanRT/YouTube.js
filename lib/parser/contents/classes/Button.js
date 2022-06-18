'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class Button {
  type = 'Button';
  
  constructor(data) {
    this.text = new Text(data.text).toString();
    
    data.accessibility?.label &&
      (this.label = data.accessibility?.label);
   
    data.tooltip &&
      (this.tooltip = data.tooltip);
      
    data.icon?.iconType && 
      (this.icon_type = data.icon?.iconType);
      
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
  }
}

module.exports = Button;