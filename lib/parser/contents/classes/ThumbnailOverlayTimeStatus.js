'use strict';

const Text = require('./Text');

class ThumbnailOverlayTimeStatus {
  type = 'thumbnailOverlayTimeStatusRenderer';
  
  constructor(data) {
    this.text = new Text(data.text).text;
  }
}

module.exports = ThumbnailOverlayTimeStatus;