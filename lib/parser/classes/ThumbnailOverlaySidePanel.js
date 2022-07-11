'use strict';

const Text = require('./Text');

class ThumbnailOverlaySidePanel {
  type = 'ThumbnailOverlaySidePanel';

  constructor(data) {
    this.text = new Text(data.text);
    this.type = data.icon.iconType;
  }
}

module.exports = ThumbnailOverlaySidePanel;