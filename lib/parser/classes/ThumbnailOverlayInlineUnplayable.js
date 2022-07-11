'use strict';

const Text = require('./Text');

class ThumbnailOverlayInlineUnplayable {
  type = 'ThumbnailOverlayInlineUnplayable';

  constructor(data) {
    this.text = new Text(data.text).toString();
    this.icon_type = data.icon.iconType;
  }
}

module.exports = ThumbnailOverlayInlineUnplayable;