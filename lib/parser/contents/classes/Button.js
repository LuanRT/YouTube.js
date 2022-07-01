'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class Button {
  type = 'Button';
  
  constructor(data) {
    this.text = new Text(data.text).toString();
    
    if (data.accessibility?.label) {
		this.label = data.accessibility?.label
	}
   
    if (data.tooltip) {
		this.tooltip = data.tooltip
	}
    
	if (data.icon?.iconType) {
		this.iconType = data.icon?.iconType
	}
      
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint || data.serviceEndpoint);
  }
}

module.exports = Button;