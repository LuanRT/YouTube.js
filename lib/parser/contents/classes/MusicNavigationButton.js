'use strict';

const Text = require('./Text');
const NavigationEndpoint = require('./NavigationEndpoint');

class MusicNavigationButton {
  type = 'MusicNavigationButton';
  
  constructor(data) {
    this.button_text = new Text(data.buttonText).toString();
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

module.exports = MusicNavigationButton;