'use strict';

class ThumbnailOverlayBottomPanel {
  type = 'ThumbnailOverlayBottomPanel';

  constructor(data) {
    this.type = data.icon.iconType;
  }
}

module.exports = ThumbnailOverlayBottomPanel;