import Parser from '../index.js';
import Element from './Element.js';

import { YTNode } from '../helpers.js';

class MusicElementHeader extends YTNode {
  static type = 'MusicElementHeader';

  element: Element | null;

  constructor(data: any) {
    super();
    this.element = Reflect.has(data, 'elementRenderer') ? Parser.parseItem<Element>(data, Element) : null;
  }
}

export default MusicElementHeader;