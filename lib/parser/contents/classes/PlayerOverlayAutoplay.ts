'use strict';

const Parser = require('..');
const Text = require('./Text');
const Author = require('./Author');
const Thumbnail = require('./Thumbnail');

class PlayerOverlayAutoplay {
  type = 'PlayerOverlayAutoplay';

  constructor(data) {
    this.title = new Text(data.title);
    this.video_id = data.videoId;
    this.video_title = new Text(data.videoTitle);
    this.short_view_count = new Text(data.shortViewCountText);
    this.prefer_immediate_redirect = data.preferImmediateRedirect;
    this.count_down_secs_for_fullscreen = data.countDownSecsForFullscreen;
    this.published = new Text(data.publishedTimeText);
    this.background = Thumbnail.fromResponse(data.background);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.author = new Author(data.byline);
    this.cancel_button = Parser.parse(data.cancelButton);
    this.next_button = Parser.parse(data.nextButton);
    this.close_button = Parser.parse(data.closeButton);
  }
}

module.exports = PlayerOverlayAutoplay;