import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

export default class RichItem extends YTNode {
  static type = 'RichItem';

  content: YTNode;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}