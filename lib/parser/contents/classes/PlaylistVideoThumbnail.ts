'use strict';

import Thumbnail from './Thumbnail';

class PlaylistVideoThumbnail {
  type = 'PlaylistVideoThumbnail';

  constructor(data) {
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default PlaylistVideoThumbnail;