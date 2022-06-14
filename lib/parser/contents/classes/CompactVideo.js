'use strict';

const Parser = require('..');
const Text = require('./Text');
const Author = require('./Author');
const Utils = require('../../../utils/Utils');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');

class CompactVideo {
  type = 'CompactVideo';
  
  constructor(data) {
    this.id = item.videoId;
    this.thumbnails = Thumbnail.fromResponse(item.thumbnail);
    this.rich_thumbnail = item.richThumbnail && Parser.parseItem(item.richThumbnail);
    this.title = new Text(item.title);
    this.author = new Author(item.longBylineText, item.ownerBadges, item.channelThumbnail);

    this.view_count = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.published = new Text(data.publishedTimeText);
 
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: Utils.timeToSeconds(new Text(data.lengthText).toString())
    };
    
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.menu = Parser.parse(data.menu);
  }

  get best_thumbnail() {
    return this.thumbnails[0];
  }
}

module.exports = CompactVideo;