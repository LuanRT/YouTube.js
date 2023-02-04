import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class RichSection extends YTNode {
  static type = 'RichSection';

  content;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}

export default RichSection;