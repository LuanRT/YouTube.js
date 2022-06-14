'use strict';

const Text = require('./Text');

class ThumbnailOverlayHoverText {
  type = 'thumbnailOverlayHoverTextRenderer';
  
  constructor(data) {
    this.text = new Text(data.text);
    this.type = data.icon.iconType;
  }
}

module.exports = ThumbnailOverlayHoverText;