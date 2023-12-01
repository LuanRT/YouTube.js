import type { ObservedArray} from '../helpers.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Parser } from '../index.ts';

export default class ProductList extends YTNode {
  static type = 'ProductList';

  contents: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}