'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class MusicCarouselShelfBasicHeader {
  type = 'musicCarouselShelfBasicHeaderRenderer';
  
  constructor(data) {
    this.title = new Text(data.title);
    this.label = data.accessibilityData.accessibilityData.label;
    
    data.thumbnail && 
      (this.thumbnail = new Thumbnail(data.thumbnail.musicThumbnailRenderer.thumbnail).thumbnails);
  }
}

module.exports = MusicCarouselShelfBasicHeader;