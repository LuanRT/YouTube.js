import Parser from '../index';
import { YTNode } from '../helpers';

class ProfileColumnStats extends YTNode {
  static type = 'ProfileColumnStats';
  
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

export default ProfileColumnStats;