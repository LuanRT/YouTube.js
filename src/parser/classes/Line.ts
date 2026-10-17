import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import LineItem from './LineItem.js';

export default class Line extends YTNode {
  static type = 'Line';

  items: ObservedArray<LineItem>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, LineItem);
  }
}