import { YTNode } from '../helpers';

class ThumbnailOverlayResumePlayback extends YTNode {
  static type = 'ThumbnailOverlayResumePlayback';

  constructor(data) {
    super();
    this.percent_duration_watched = data.percentDurationWatched;
  }
}

export default ThumbnailOverlayResumePlayback;