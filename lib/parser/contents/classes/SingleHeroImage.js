'use strict';

const Thumbnail = require('./Thumbnail');

class SingleHeroImage {
  type = 'SingleHeroImage';
  
  constructor(data) {
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.style = data.style;
  }
}

module.exports = SingleHeroImage;