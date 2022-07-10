'use strict';

import Thumbnail from './Thumbnail';

class BackstageImage {
  type = 'BackstageImage';

  constructor(data) {
    this.image = Thumbnail.fromResponse(data.image);
  }
}

export default BackstageImage;