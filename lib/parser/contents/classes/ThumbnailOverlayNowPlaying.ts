'use strict';

import Text from './Text';

class ThumbnailOverlayNowPlaying {
  type = 'ThumbnailOverlayNowPlaying';

  constructor(data) {
    this.text = new Text(data.text).text;
  }
}

export default ThumbnailOverlayNowPlaying;