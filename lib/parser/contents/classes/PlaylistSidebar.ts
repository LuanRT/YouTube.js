'use strict';

import Parser from '..';

class PlaylistSidebar {
  type = 'PlaylistSidebar';

  constructor(data) {
    this.items = Parser.parse(data.items);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default PlaylistSidebar;