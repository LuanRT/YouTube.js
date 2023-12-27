import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class WatchCardSectionSequence extends YTNode {
  static type = 'WatchCardSectionSequence';

  lists: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.lists = Parser.parseArray(data.lists);
  }
}