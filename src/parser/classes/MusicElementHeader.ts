import Parser from '../index';
import Element from './Element';

import { YTNode } from '../helpers';

class MusicElementHeader extends YTNode {
  static type = 'MusicElementHeader';

  element: Element | null;

  constructor(data: any) {
    super();
    this.element = Reflect.has(data, 'elementRenderer') ? Parser.parseItem<Element>(data, Element) : null;
  }
}

export default MusicElementHeader;