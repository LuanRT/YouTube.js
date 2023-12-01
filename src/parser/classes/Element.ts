import { Parser, type RawNode } from '../index.js';
import ChildElement from './misc/ChildElement.js';
import { type ObservedArray, YTNode, observe } from '../helpers.js';

export default class Element extends YTNode {
  static type = 'Element';

  model?: YTNode;
  child_elements?: ObservedArray<ChildElement>;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'elementRenderer')) {
      return Parser.parseItem(data, Element) as Element;
    }

    const type = data.newElement.type.componentType;

    this.model = Parser.parseItem(type?.model);

    if (Reflect.has(data, 'newElement') && Reflect.has(data.newElement, 'childElements')) {
      this.child_elements = observe(data.newElement.childElements?.map((el: RawNode) => new ChildElement(el)) || []);
    }
  }
}