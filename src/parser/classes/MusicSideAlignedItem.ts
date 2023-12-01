import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class MusicSideAlignedItem extends YTNode {
  static type = 'MusicSideAlignedItem';

  start_items?: ObservedArray<YTNode>;
  end_items?: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'startItems')) {
      this.start_items = Parser.parseArray(data.startItems);
    }

    if (Reflect.has(data, 'endItems')) {
      this.end_items = Parser.parseArray(data.endItems);
    }
  }
}