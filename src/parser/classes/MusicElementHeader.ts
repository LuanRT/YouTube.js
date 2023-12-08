import { Parser, type RawNode } from '../index.js';
import Element from './Element.js';
import { YTNode } from '../helpers.js';

export default class MusicElementHeader extends YTNode {
  static type = 'MusicElementHeader';

  element: Element | null;

  constructor(data: RawNode) {
    super();
    this.element = Reflect.has(data, 'elementRenderer') ? Parser.parseItem(data, Element) : null;
  }
}