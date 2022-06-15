'use strict';

const Text = require('./Text');

class ThumbnailOverlayEndorsement {
  type = 'ThumbnailOverlayEndorsement';
  
  constructor(data) {
    this.text = new Text(data.text).toString();
  }
}

module.exports = ThumbnailOverlayEndorsement;