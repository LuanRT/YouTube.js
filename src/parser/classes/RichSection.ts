import Parser from '../index';
import { YTNode } from '../helpers';

class RichSection extends YTNode {
  static type = 'RichSection';

  content;

  constructor(data: any) {
    super();
    this.content = Parser.parseItem(data.content);
  }
}

export default RichSection;