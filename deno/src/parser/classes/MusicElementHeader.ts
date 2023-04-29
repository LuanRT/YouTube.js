import Parser, { type RawNode } from '../index.ts';
import Element from './Element.ts';
import { YTNode } from '../helpers.ts';

export default class MusicElementHeader extends YTNode {
  static type = 'MusicElementHeader';

  element: Element | null;

  constructor(data: RawNode) {
    super();
    this.element = Reflect.has(data, 'elementRenderer') ? Parser.parseItem(data, Element) : null;
  }
}