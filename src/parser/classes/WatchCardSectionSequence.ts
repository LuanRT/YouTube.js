import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class WatchCardSectionSequence extends YTNode {
  static type = 'WatchCardSectionSequence';

  lists;

  constructor(data: any) {
    super();
    this.lists = Parser.parseArray(data.lists);
  }
}

export default WatchCardSectionSequence;