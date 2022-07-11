'use strict';

const Parser = require('..');

class PlaylistSidebarSecondaryInfo {
  type = 'PlaylistSidebarSecondaryInfo';

  constructor(data) {
    this.owner = Parser.parse(data.videoOwner) || null;
    this.button = Parser.parse(data.button) || null;
  }
}

module.exports = PlaylistSidebarSecondaryInfo;