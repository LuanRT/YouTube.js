import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class BrowseFeedActions extends YTNode {
  static type = 'BrowseFeedActions';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}

export default BrowseFeedActions;