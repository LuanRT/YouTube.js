import Parser from '../index';
import { YTNode } from '../helpers';

class FeedFilterChipBar extends YTNode {
  static type = 'FeedFilterChipBar';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.contents);
  }
}

export default FeedFilterChipBar;