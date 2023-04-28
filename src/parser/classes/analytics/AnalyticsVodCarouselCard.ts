import Video from './AnalyticsVideo.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class AnalyticsVodCarouselCard extends YTNode {
  static type = 'AnalyticsVodCarouselCard';

  title: string;
  videos?: Video[];
  no_data_message?: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title;

    if (Reflect.has(data, 'noDataMessage')) {
      this.no_data_message = data.noDataMessage;
    }

    if (Reflect.has(data, 'videoCarouselData') && Reflect.has(data.videoCarouselData, 'videos')) {
      this.videos = data.videoCarouselData.videos.map((video: RawNode) => new Video(video));
    }
  }
}