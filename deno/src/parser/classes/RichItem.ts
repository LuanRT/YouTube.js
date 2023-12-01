import { Parser, type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';

export default class RichItem extends YTNode {
  static type = 'RichItem';

  content: YTNode;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}