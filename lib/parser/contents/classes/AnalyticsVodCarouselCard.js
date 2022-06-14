'use strict';

const Video = require('./AnalyticsVideo');

class AnalyticsVodCarouselCard {
  type = 'AnalyticsVodCarouselCard';
  
  constructor(data) {
    this.title = data.title;
    this.videos = data.videoCarouselData.videos.map((video) => new Video(video));
  }
}

module.exports = AnalyticsVodCarouselCard; 