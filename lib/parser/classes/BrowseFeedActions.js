import Parser from '../index';

import { YTNode } from '../helpers';

class BrowseFeedActions extends YTNode {
  static type = 'BrowseFeedActions';
  constructor(data) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}
export default BrowseFeedActions;
