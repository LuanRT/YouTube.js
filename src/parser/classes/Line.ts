import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import LineItem from './LineItem.js';

export default class Line extends YTNode {
  static type = 'Line';

  items: ObservedArray<LineItem> | null;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parse(data.items, true, LineItem);
  }
}