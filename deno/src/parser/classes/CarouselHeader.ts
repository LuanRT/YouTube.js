import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class CarouselHeader extends YTNode {
  static type = 'CarouselHeader';

  contents: YTNode[];

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}

export default CarouselHeader;