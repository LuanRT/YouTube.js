import Parser from '..';
import { YTNode } from '../helpers';

export default class CarouselHeader extends YTNode {
  static type = 'CarouselHeader';

  contents: YTNode[];

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}