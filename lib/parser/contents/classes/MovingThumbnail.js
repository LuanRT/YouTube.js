'use strict';

const Thumbnail = require('./Thumbnail');

class MovingThumbnail {
  type = 'movingThumbnailRenderer';
  
  #data;
 
  constructor(data) {
    this.#data = data;
  }
  
  get thumbnails() {
    return this.#data.movingThumbnailDetails.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
  }
}

module.exports = MovingThumbnail;