import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class CarouselHeader extends YTNode {
  static type = 'CarouselHeader';

  contents: YTNode[];

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}

export default CarouselHeader;