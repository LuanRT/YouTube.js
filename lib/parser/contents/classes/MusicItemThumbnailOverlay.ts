'use strict';

import Parser from '..';

class MusicItemThumbnailOverlay {
  type = 'MusicItemThumbnailOverlay';

  constructor(data) {
    this.content = Parser.parse(data.content);
    this.content_position = data.contentPosition;
    this.display_style = data.displayStyle;
  }
}

export default MusicItemThumbnailOverlay;