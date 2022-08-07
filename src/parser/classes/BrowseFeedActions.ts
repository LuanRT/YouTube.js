import Parser from '../index';
import { YTNode } from '../helpers';

class BrowseFeedActions extends YTNode {
  static type = 'BrowseFeedActions';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}

export default BrowseFeedActions;