import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class ProfileColumn extends YTNode {
  static type = 'ProfileColumn';

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

export default ProfileColumn;