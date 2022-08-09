import Parser from '../index';
import { YTNode } from '../helpers';

class RichSection extends YTNode {
  static type = 'RichSection';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parse(data.content);
  }
}

export default RichSection;