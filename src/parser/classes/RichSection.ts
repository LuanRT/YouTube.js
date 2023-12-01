import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';

export default class RichSection extends YTNode {
  static type = 'RichSection';

  content: YTNode;

  constructor(data: RawNode) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}