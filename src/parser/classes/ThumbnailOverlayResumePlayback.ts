import { YTNode } from '../helpers.js';

class ThumbnailOverlayResumePlayback extends YTNode {
  static type = 'ThumbnailOverlayResumePlayback';

  percent_duration_watched: string; // TODO: is this a number?

  constructor(data: any) {
    super();
    this.percent_duration_watched = data.percentDurationWatched;
  }
}

export default ThumbnailOverlayResumePlayback;