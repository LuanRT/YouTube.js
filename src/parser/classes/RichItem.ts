import Parser from '../index';
import { YTNode } from '../helpers';

class RichItem extends YTNode {
  static type = 'RichItem';

  content;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}

export default RichItem;