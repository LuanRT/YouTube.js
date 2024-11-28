import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class ChannelSwitcherPage extends YTNode {
  static type = 'ChannelSwitcherPage';

  header: YTNode;
  contents: ObservedArray<YTNode> | null;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header);
    this.contents = Parser.parse(data.contents, true);
  }
}