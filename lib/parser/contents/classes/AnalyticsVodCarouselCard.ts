'use strict';

import Video from './AnalyticsVideo';

class AnalyticsVodCarouselCard {
  type = 'AnalyticsVodCarouselCard';

  constructor(data) {
    this.title = data.title;
    this.videos = data.videoCarouselData.videos.map((video) => new Video(video));
  }
}

export default AnalyticsVodCarouselCard;