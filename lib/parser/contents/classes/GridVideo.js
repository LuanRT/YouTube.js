'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');
const NavigationEndpoint = require('./NavigationEndpoint');
const Author = require('./Author');

class GridVideo {
  type = 'GridVideo';
  
  constructor(data) {
    const length_alt = data.thumbnailOverlays.find(overlay => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;
    
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.rich_thumbnail = item.richThumbnail && Parser.parseItem(item.richThumbnail);
    this.published = new Text(data.publishedTimeText);
    this.duration = data.lengthText ? new Text(data.lengthText) : length_alt?.text ? new Text(length_alt.text) : '';
    this.author = item.shortBylineText && new Author(item.shortBylineText, item.ownerBadges);
    this.views = new Text(data.viewCountText);
    this.short_view_count = new Text(data.shortViewCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.menu = Parser.parse(data.menu);
  }
}

module.exports = GridVideo;