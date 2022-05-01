const ResultsParser = require('.');
const Thumbnail = require('./Thumbnail');

class PlaylistVideoThumbnail {
  type = 'PlaylistVideoThumbnail';

  constructor(item) {
    this.thumbnail = Thumbnail.fromResponse(item.thumbnail);
  }
}

module.exports = PlaylistVideoThumbnail;