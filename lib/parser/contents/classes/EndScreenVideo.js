'use strict';

const Parser = require('..');
const Text = require('./Text');
const Author = require('./Author');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class EndScreenVideo {
  type = 'EndScreenVideo';

  constructor(data) {
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.author = new Author(data.shortBylineText, data.ownerBadges);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.short_view_count_text = new Text(data.shortViewCountText);
    this.badges = Parser.parse(data.badges);
    this.duration = {
      text: new Text(data.lengthText).toString(), 
      seconds: data.lengthInSeconds
    }
  }
}

module.exports = EndScreenVideo;