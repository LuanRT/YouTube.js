'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class SubFeedOption {
  type = 'SubFeedOption';

  constructor(data) {
    this.name = new Text(data.name);
    this.is_selected = data.isSelected;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

module.exports = SubFeedOption;