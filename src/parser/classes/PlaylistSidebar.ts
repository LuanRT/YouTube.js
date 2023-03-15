import Parser, { RawNode } from '../index.js';
import { YTNode } from '../helpers.js';

class PlaylistSidebar extends YTNode {
  static type = 'PlaylistSidebar';

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

export default PlaylistSidebar;