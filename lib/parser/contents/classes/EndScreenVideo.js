'use strict';

const Parser = require('..');
const Text = require('./Text');
const Author = require('./Author');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class EndScreenVideo {
  type = 'endScreenVideoRenderer';

  constructor(data) {
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.author = new Author({ nav_text: data.shortBylineText, badges: data.ownerBadges || data.badges });
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.short_view_count_text = new Text(data.shortViewCountText);
    this.duration = {
      text: new Text(data.lengthText).toString(), 
      seconds: data.lengthInSeconds
    }
  }
}

module.exports = EndScreenVideo;