const Parser = require('..');

class PlaylistSidebarSecondaryInfo {
  type = 'PlaylistSidebarSecondaryInfo';

  constructor(data) {
    this.owner = data.videoOwner && Parser.parseItem(data.videoOwner);
    this.button = data.button && Parser.parseItem(data.button);
  }
}

module.exports = PlaylistSidebarSecondaryInfo;