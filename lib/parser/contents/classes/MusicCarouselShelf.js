'use strict';

const Parser = require('..');

class MusicCarouselShelf {
  type = 'musicCarouselShelfRenderer';
  
  constructor(data) {
    this.header = Parser.parse(data.header);
    this.contents = Parser.parse(data.contents);
    this.item_size = data.itemSize || null;
    this.num_items_per_column = data.numItemsPerColumn || null;
  }
}

module.exports = MusicCarouselShelf;