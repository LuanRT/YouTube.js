import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class ProfileColumnStats extends YTNode {
  static type = 'ProfileColumnStats';

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

export default ProfileColumnStats;
