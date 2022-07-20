import Parser from '../index';

import { YTNode } from '../helpers';

class FeedFilterChipBar extends YTNode {
  static type = 'FeedFilterChipBar';
  constructor(data) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}
export default FeedFilterChipBar;
