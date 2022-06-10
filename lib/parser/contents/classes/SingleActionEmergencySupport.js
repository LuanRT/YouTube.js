'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class SingleActionEmergencySupport {
  type = 'singleActionEmergencySupportRenderer';
  
  constructor(data) {
    this.action_text = new Text(data.actionText);
    this.nav_text = new Text(data.navigationText);
    this.details = new Text(data.detailsText);
    this.icon_type = data.icon.iconType;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

module.exports = SingleActionEmergencySupport;