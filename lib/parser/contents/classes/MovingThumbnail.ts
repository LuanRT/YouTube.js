'use strict';

import Thumbnail from './Thumbnail';

class MovingThumbnail {
  type = 'MovingThumbnail';

  constructor(data) {
    return data.movingThumbnailDetails?.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
  }
}

export default MovingThumbnail;