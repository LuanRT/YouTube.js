'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');

class DownloadButton {
  type = 'DownloadButton';

  constructor(data) {
    this.style = data.style;
    this.size = data.size;
    this.endpoint = new NavigationEndpoint(data.command);
    this.target_id = data.targetId;
  }
}

module.exports = DownloadButton;