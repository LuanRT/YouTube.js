import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';

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