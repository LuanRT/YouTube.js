'use strict';

const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class MusicCarouselShelfBasicHeader {
  type = 'MusicCarouselShelfBasicHeader';
  
  constructor(data) {
    data.strapline &&
      (this.strapline = new Text(data.strapline).toString());
    
    this.title = new Text(data.title).toString();
   
    // this.label = data.accessibilityData.accessibilityData.label;
    // ^^ redundant?
    
    data.thumbnail && 
      (this.thumbnail = Thumbnail.fromResponse(data.thumbnail.musicThumbnailRenderer.thumbnail));
  }
}

module.exports = MusicCarouselShelfBasicHeader;