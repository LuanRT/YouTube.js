'use strict';

class Thumbnail {
  type = 'thumbnail';
  
  #data;
  
  constructor(data) {
    this.#data = data;
    
    if (!data.hasOwnProperty('thumbnails')) {
      this.url = data.url;
      this.width = data.width;
      this.height = data.height;
    }
  }
  
  get thumbnails() {
    return this.#data.thumbnails.map((thumbnail) => new Thumbnail(thumbnail)).sort((a, b) => b.width - a.width);
  }
}

module.exports = Thumbnail;