'use strict';

class ThumbnailOverlayResumePlayback {
  type = 'thumbnailOverlayResumePlaybackRenderer';
  
  constructor(data) {
    this.percent_duration_watched = data.percentDurationWatched;
  }
}

module.exports = ThumbnailOverlayResumePlayback;