'use strict';

const Text = require('./Text');

class ThumbnailOverlayPlaybackStatus {
  type = 'ThumbnailOverlayPlaybackStatus';
  
  constructor(data) {
    this.text = data.texts.map((text) => new Text(text))[0].toString();
  }
}

module.exports = ThumbnailOverlayPlaybackStatus;