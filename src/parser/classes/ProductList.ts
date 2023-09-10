import { ObservedArray, YTNode } from "../helpers.js";
import Parser, { RawNode } from "../index.js";

export default class ProductList extends YTNode {
  static type = 'ProductList';

  contents: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
  }
}