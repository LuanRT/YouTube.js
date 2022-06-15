'use strict';

const Parser = require('..');

class PlaylistSidebar {
  type = 'PlaylistSidebar';
  
  constructor(data) {
    this.items = Parser.parse(data.items);
    this.contents = this.items; // XXX: alias for consistency
  }
}

module.exports = PlaylistSidebar;