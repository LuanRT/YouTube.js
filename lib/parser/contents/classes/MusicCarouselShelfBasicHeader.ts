'use strict';

import Text from './Text';
import Thumbnail from './Thumbnail';

class MusicCarouselShelfBasicHeader {
  type = 'MusicCarouselShelfBasicHeader';

  constructor(data) {
    if (data.strapline) {
      this.strapline = new Text(data.strapline).toString();
    }

    this.title = new Text(data.title).toString();

    // This.label = data.accessibilityData.accessibilityData.label;
    // ^^ redundant?

    if (data.thumbnail) {
      this.thumbnail = Thumbnail.fromResponse(data.thumbnail.musicThumbnailRenderer.thumbnail);
    }
  }
}

export default MusicCarouselShelfBasicHeader;