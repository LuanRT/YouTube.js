import Parser from '../index';
import { YTNode } from '../helpers';

class Element extends YTNode {
  static type = 'Element';

  model;

  constructor(data: any) {
    super();
    const type = data.newElement.type.componentType;
    this.model = Parser.parse(type.model);
  }
}

export default Element;