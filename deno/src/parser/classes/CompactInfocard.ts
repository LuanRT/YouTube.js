import { Parser, type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';

export default class CompactInfocard extends YTNode {
  static type = 'CompactInfocard';

  public content: YTNode | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}