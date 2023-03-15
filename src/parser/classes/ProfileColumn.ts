import Parser, { RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

class ProfileColumn extends YTNode {
  static type = 'ProfileColumn';

  items;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default ProfileColumn;