'use strict';

import Text from './Text';

class ThumbnailOverlayHoverText {
  type = 'ThumbnailOverlayHoverText';

  constructor(data) {
    this.text = new Text(data.text);
    this.type = data.icon.iconType;
  }
}

export default ThumbnailOverlayHoverText;