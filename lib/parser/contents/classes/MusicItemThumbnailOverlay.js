'use strict';

const Parser = require('..');

class MusicItemThumbnailOverlay {
  type = 'MusicItemThumbnailOverlay';

  constructor(data) {
    this.content = Parser.parse(data.content);
    this.content_position = data.contentPosition;
    this.display_style = data.displayStyle;
  }
}

module.exports = MusicItemThumbnailOverlay;