'use strict';

import Thumbnail from './Thumbnail';

class SingleHeroImage {
  type = 'SingleHeroImage';

  constructor(data) {
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.style = data.style;
  }
}

export default SingleHeroImage;