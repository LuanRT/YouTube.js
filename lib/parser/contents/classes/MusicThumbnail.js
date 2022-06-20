'use strict';

const Thumbnail = require('./Thumbnail');

class MusicThumbnail {
  type = 'MusicThumbnail';
  
  constructor(data) {
    return Thumbnail.fromResponse(data.thumbnail);
  }
}

module.exports = MusicThumbnail;