'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class ChipCloudChip {
  type = 'ChipCloudChip';

  constructor(data) {
    // TODO: is this isSelected or just selected
    this.is_selected = data.isSelected;
    this.endpoint = data.navigationEndpoint && new NavigationEndpoint(data.navigationEndpoint);
    this.text = new Text(data.text).toString();
  }
}

module.exports = ChipCloudChip;