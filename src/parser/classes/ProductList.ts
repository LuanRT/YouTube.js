import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';

export default class ProductList extends YTNode {
  static type = 'ProductList';

  contents: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}