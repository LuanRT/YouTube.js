import Parser from '../index';
import { YTNode } from '../helpers';

class Element extends YTNode {
  static type = 'Element';
  model;

  constructor(data) {
    super();
    const type = data.newElement.type.componentType;
    this.model = Parser.parse(type.model);
  }
}

export default Element;