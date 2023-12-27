import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';

export default class WatchCardSectionSequence extends YTNode {
  static type = 'WatchCardSectionSequence';

  lists: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.lists = Parser.parseArray(data.lists);
  }
}