'use strict';

import Text from './Text';

class ThumbnailOverlayTimeStatus {
  type = 'ThumbnailOverlayTimeStatus';

  constructor(data) {
    this.text = new Text(data.text).text;
  }
}

export default ThumbnailOverlayTimeStatus;