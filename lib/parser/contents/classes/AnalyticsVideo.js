'use strict';

const Thumbnail = require('./Thumbnail');

class AnalyticsVideo {
  type = 'AnalyticsVideo';
  
  constructor(data) {
    this.title = data.videoTitle;
    this.metadata = {
      views: data.videoDescription.split('·')[0].trim(),
      published: data.videoDescription.split('·')[1].trim(),
      thumbnails: Thumbnail.fromResponse(data.thumbnailDetails),
      duration: data.formattedLength,
      is_short: data.isShort
    }
  }
}

module.exports = AnalyticsVideo;