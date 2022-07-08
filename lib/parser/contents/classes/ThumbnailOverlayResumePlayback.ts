'use strict';

class ThumbnailOverlayResumePlayback {
  type = 'ThumbnailOverlayResumePlayback';

  constructor(data) {
    this.percent_duration_watched = data.percentDurationWatched;
  }
}

export default ThumbnailOverlayResumePlayback;