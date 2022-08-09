import Parser from '../index';
import { YTNode } from '../helpers';

class RichItem extends YTNode {
  static type = 'RichItem';

  content;

  constructor(data: any) {
    super();
    // TODO: check this
    this.content = Parser.parse(data.content);
  }
}

export default RichItem;