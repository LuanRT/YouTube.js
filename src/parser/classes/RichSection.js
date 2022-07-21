import Parser from '../index';
import { YTNode } from '../helpers';

class RichSection extends YTNode {
  static type = 'RichSection';

  constructor(data) {
    super();
    this.contents = Parser.parse(data.content);
  }
}

export default RichSection;