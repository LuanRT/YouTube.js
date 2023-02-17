import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class BrowseFeedActions extends YTNode {
  static type = 'BrowseFeedActions';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}

export default BrowseFeedActions;