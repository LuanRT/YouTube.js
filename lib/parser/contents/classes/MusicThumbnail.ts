'use strict';

import Thumbnail from './Thumbnail';

class MusicThumbnail {
  type = 'MusicThumbnail';

  constructor(data) {
    return Thumbnail.fromResponse(data.thumbnail);
  }
}

export default MusicThumbnail;