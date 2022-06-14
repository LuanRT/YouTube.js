'use strict';

const Text = require('./Text');

class ThumbnailOverlayNowPlaying {
  type = 'thumbnailOverlayNowPlayingRenderer';
  
  constructor(data) {
    this.text = new Text(data.text).text;
  }
}

module.exports = ThumbnailOverlayNowPlaying;