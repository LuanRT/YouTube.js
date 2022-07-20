import Thumbnail from './misc/Thumbnail';

import { YTNode } from '../helpers';

class AnalyticsVideo extends YTNode {
  static type = 'AnalyticsVideo';
  constructor(data) {
    super();
    this.title = data.videoTitle;
    this.metadata = {
      views: data.videoDescription.split('·')[0].trim(),
      published: data.videoDescription.split('·')[1].trim(),
      thumbnails: Thumbnail.fromResponse(data.thumbnailDetails),
      duration: data.formattedLength,
      is_short: data.isShort
    };
  }
}
export default AnalyticsVideo;
