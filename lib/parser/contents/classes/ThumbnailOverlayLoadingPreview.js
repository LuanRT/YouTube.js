'use strict';

const Text = require('./Text');

class ThumbnailOverlayLoadingPreview {
  type = 'ThumbnailOverlayLoadingPreview';

  constructor(data) {
    this.text = new Text(data.text);
  }
}

module.exports = ThumbnailOverlayLoadingPreview;