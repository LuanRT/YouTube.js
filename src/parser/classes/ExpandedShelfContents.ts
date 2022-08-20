import Parser from '../index';
import { YTNode } from '../helpers';

class ExpandedShelfContents extends YTNode {
  static type = 'ExpandedShelfContents';

  items;

  constructor(data: any) {
    super();
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default ExpandedShelfContents;