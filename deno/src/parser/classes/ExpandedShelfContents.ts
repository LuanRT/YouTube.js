import Parser, { type RawNode } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';

export default class ExpandedShelfContents extends YTNode {
  static type = 'ExpandedShelfContents';

  items: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}