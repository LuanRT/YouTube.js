'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

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

module.exports = MusicCarouselShelfBasicHeader;