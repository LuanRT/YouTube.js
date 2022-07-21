import Video from './AnalyticsVideo';
import { YTNode } from '../helpers';

class AnalyticsVodCarouselCard extends YTNode {
  static type = 'AnalyticsVodCarouselCard';

  constructor(data) {
    super();
    this.title = data.title;
    this.videos = data.videoCarouselData.videos.map((video) => new Video(video));
  }
}

export default AnalyticsVodCarouselCard;