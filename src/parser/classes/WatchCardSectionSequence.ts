import Parser from '../index';
import { YTNode } from '../helpers';

export default class WatchCardSectionSequence extends YTNode {
  static type = 'WatchCardSectionSequence';

  lists;

  constructor(data: any) {
    super();
    this.lists = Parser.parseArray(data.lists);
  }
}