'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class MusicCarouselShelfBasicHeader {
  type = 'musicCarouselShelfBasicHeaderRenderer';
  
  constructor(data) {
    data.strapline &&
      (this.strapline = new Text(data.strapline).toString());
    
    this.title = new Text(data.title).toString();
   
    // this.label = data.accessibilityData.accessibilityData.label;
    // ^^ redundant?
    
    data.thumbnail && 
      (this.thumbnail = new Thumbnail(data.thumbnail.musicThumbnailRenderer.thumbnail).thumbnails);
  }
}

module.exports = MusicCarouselShelfBasicHeader;