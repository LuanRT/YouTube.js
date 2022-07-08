'use strict';

import Text from './Text';

class ThumbnailOverlayEndorsement {
  type = 'ThumbnailOverlayEndorsement';

  constructor(data) {
    this.text = new Text(data.text).toString();
  }
}

export default ThumbnailOverlayEndorsement;