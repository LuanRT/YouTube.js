import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class RichItem extends YTNode {
  static type = 'RichItem';

  content;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}

export default RichItem;