import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class CompactInfocard extends YTNode {
  static type = 'CompactInfocard';

  public content: YTNode | null;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}