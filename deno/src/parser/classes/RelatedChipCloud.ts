import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class RelatedChipCloud extends YTNode {
  static type = 'RelatedChipCloud';

  content;

  constructor(data: any) {
    super();
    this.content = Parser.parse(data.content);
  }
}

export default RelatedChipCloud;