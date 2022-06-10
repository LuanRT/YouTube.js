'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class ChipCloudChip {
  type = 'chipCloudChipRenderer';
  
  constructor(data) {
    this.text = new Text(data.text).toString();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.is_selected = data.isSelected;
  }
}

module.exports = ChipCloudChip;