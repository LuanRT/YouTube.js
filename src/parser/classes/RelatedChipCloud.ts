import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class RelatedChipCloud extends YTNode {
  static type = 'RelatedChipCloud';

  content;

  constructor(data: any) {
    super();
    this.content = Parser.parse(data.content);
  }
}

export default RelatedChipCloud;