'use strict';

const Parser = require('..');
const Text = require('./Text');
const Author = require('./Author');
const Utils = require('../../../utils/Utils');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class CompactVideo {
  type = 'compactVideoRenderer';
  
  constructor(data) {
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.author = new Author({ nav_text: data.longBylineText, badges: data.ownerBadges || data.badges });
    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.published = new Text(data.publishedTimeText);
 
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: Utils.timeToSeconds(new Text(data.lengthText).toString())
    };
    
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.channel_thumbnails = new Thumbnail(data.channelThumbnail).thumbnails;
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.menu = Parser.parse(data.menu);
  }
}

module.exports = CompactVideo;