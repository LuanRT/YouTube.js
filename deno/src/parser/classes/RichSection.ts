import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class RichSection extends YTNode {
  static type = 'RichSection';

  content;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}

export default RichSection;