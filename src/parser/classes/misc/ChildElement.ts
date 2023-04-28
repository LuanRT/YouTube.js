import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class ChildElement extends YTNode {
  static type = 'ChildElement';

  text?: string;
  properties;
  child_elements?: ChildElement[];

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'type') && Reflect.has(data.type, 'textType')) {
      this.text = data.type.textType.text?.content;
    }

    this.properties = data.properties;

    if (Reflect.has(data, 'childElements')) {
      this.child_elements = data.childElements.map((el: RawNode) => new ChildElement(el));
    }
  }
}