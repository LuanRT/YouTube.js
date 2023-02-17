import Parser from '../index.ts';
import Element from './Element.ts';

import { YTNode } from '../helpers.ts';

class MusicElementHeader extends YTNode {
  static type = 'MusicElementHeader';

  element: Element | null;

  constructor(data: any) {
    super();
    this.element = Reflect.has(data, 'elementRenderer') ? Parser.parseItem<Element>(data, Element) : null;
  }
}

export default MusicElementHeader;