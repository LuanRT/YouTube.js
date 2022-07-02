'use strict';

const Thumbnail = require('./Thumbnail');

class PlaylistVideoThumbnail {
  type = 'PlaylistVideoThumbnail';

  constructor(data) {
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}

module.exports = PlaylistVideoThumbnail;