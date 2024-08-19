import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ThumbnailOverlayResumePlayback extends YTNode {
  static type = 'ThumbnailOverlayResumePlayback';

  percent_duration_watched: number;

  constructor(data: RawNode) {
    super();
    this.percent_duration_watched = data.percentDurationWatched;
  }
}
