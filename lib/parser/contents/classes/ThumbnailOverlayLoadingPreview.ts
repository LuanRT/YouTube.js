'use strict';

import Text from './Text';

class ThumbnailOverlayLoadingPreview {
  type = 'ThumbnailOverlayLoadingPreview';

  constructor(data) {
    this.text = new Text(data.text);
  }
}

export default ThumbnailOverlayLoadingPreview;