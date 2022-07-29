import Video from './AnalyticsVideo';
import { YTNode } from '../../helpers';

class AnalyticsVodCarouselCard extends YTNode {
  static type = 'AnalyticsVodCarouselCard';

  title: string;
  videos: Video[];

  constructor(data: any) {
    super();
    this.title = data.title;
    this.videos = data.videoCarouselData.videos.map((video: any) => new Video(video));
  }
}

export default AnalyticsVodCarouselCard;