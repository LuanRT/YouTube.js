import { Parser, type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';

export default class RelatedChipCloud extends YTNode {
  static type = 'RelatedChipCloud';

  content: YTNode;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}