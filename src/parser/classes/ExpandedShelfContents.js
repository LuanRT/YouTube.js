import Parser from '../index';
import { YTNode } from '../helpers';

class ExpandedShelfContents extends YTNode {
  static type = 'ExpandedShelfContents';

  constructor(data) {
    super();
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default ExpandedShelfContents;