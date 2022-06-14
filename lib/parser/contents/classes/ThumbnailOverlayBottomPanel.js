'use strict';

class ThumbnailOverlayBottomPanel {
  type = 'thumbnailOverlayBottomPanelRenderer';
  
  constructor(data) {
    this.type = data.icon.iconType;
  }
}

module.exports = ThumbnailOverlayBottomPanel;