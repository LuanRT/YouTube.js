'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class ToggleMenuServiceItem {
  type = 'ToggleMenuServiceItem';

  constructor(data) {
    this.text = new Text(data.defaultText);
    this.toggled_text = new Text(data.toggledText);
    this.icon_type = data.defaultIcon.iconType;
    this.toggled_icon_type = data.toggledIcon.iconType;
    this.endpoint = new NavigationEndpoint(data.toggledServiceEndpoint);
  }
}

module.exports = ToggleMenuServiceItem;