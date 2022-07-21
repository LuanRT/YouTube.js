import Parser from '../index';
import { YTNode } from '../helpers';

class MusicCarouselShelf extends YTNode {
  static type = 'MusicCarouselShelf';

  constructor(data) {
    super();
    this.header = Parser.parse(data.header);
    this.contents = Parser.parse(data.contents);
    if (data.numItemsPerColumn) {
      this.num_items_per_column = data.numItemsPerColumn;
    }
  }
}

export default MusicCarouselShelf;