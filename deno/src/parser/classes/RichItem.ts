import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class RichItem extends YTNode {
  static type = 'RichItem';

  content;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}

export default RichItem;