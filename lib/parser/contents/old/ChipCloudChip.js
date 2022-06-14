const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class ChipCloudChip {
  type = 'ChipCloudChip';

  constructor(item) {
    // TODO: is this isSelected or just selected
    this.is_selected = item.isSelected;
    this.endpoint = item.navigationEndpoint && new NavigationEndpoint(item.navigationEndpoint);
    this.text = new Text(item.text);
  }
}

module.exports = ChipCloudChip;