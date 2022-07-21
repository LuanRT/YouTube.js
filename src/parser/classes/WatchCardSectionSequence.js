import Parser from '../index';
import { YTNode } from '../helpers';

class WatchCardSectionSequence extends YTNode {
  static type = 'WatchCardSectionSequence';
  constructor(data) {
    super();
    this.lists = Parser.parse(data.lists);
  }
}

export default WatchCardSectionSequence;