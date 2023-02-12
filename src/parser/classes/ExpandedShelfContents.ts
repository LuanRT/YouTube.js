import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class ExpandedShelfContents extends YTNode {
  static type = 'ExpandedShelfContents';

  items;

  constructor(data: any) {
    super();
    this.items = Parser.parseArray(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default ExpandedShelfContents;