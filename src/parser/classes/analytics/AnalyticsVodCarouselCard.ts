import Video from './AnalyticsVideo.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

class AnalyticsVodCarouselCard extends YTNode {
  static type = 'AnalyticsVodCarouselCard';

  title: string;
  videos: Video[] | null;
  no_data_message?: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title;

    if (data.noDataMessage) {
      this.no_data_message = data.noDataMessage;
    }

    this.videos = data.videoCarouselData?.videos.map((video: any) => new Video(video)) || null;
  }
}

export default AnalyticsVodCarouselCard;