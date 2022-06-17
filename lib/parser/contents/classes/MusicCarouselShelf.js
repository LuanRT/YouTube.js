'use strict';

const Parser = require('..');

class MusicCarouselShelf {
  type = 'MusicCarouselShelf';
  
  constructor(data) {
    this.header = Parser.parse(data.header);
    this.contents = Parser.parse(data.contents);
   
    data.itemSize && 
      (this.item_size = data.itemSize);
    
    data.numItemsPerColumn && 
      (this.num_items_per_column = data.numItemsPerColumn);
  }
}

module.exports = MusicCarouselShelf;