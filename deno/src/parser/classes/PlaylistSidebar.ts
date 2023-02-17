import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';

class PlaylistSidebar extends YTNode {
  static type = 'PlaylistSidebar';

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

export default PlaylistSidebar;