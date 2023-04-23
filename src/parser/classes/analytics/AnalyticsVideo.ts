import Thumbnail from '../misc/Thumbnail.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class AnalyticsVideo extends YTNode {
  static type = 'AnalyticsVideo';

  title: string;
  metadata: {
    views: string;
    published: string;
    thumbnails: Thumbnail[];
    duration: string;
    is_short: boolean;
  };

  constructor(data: RawNode) {
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