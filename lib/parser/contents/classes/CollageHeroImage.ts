'use strict';

import NavigationEndpoint from './NavigationEndpoint';
import Thumbnail from './Thumbnail';

class CollageHeroImage {
  type = 'CollageHeroImage';

  constructor(data) {
    this.left = Thumbnail.fromResponse(data.leftThumbnail);
    this.top_right = Thumbnail.fromResponse(data.topRightThumbnail);
    this.bottom_right = Thumbnail.fromResponse(data.bottomRightThumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default CollageHeroImage;