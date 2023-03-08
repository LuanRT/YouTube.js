import Video from './AnalyticsVideo.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

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