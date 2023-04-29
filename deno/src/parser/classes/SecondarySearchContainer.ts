import Parser, { type RawNode } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';

export default class SecondarySearchContainer extends YTNode {
  static type = 'SecondarySearchContainer';

  contents: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}