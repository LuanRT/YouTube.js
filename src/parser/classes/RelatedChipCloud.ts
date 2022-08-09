import Parser from '../index';
import { YTNode } from '../helpers';

class RelatedChipCloud extends YTNode {
  static type = 'RelatedChipCloud';
  
  content;
  
  constructor(data: any) {
    super();
    this.content = Parser.parse(data.content);
  }
}

export default RelatedChipCloud;