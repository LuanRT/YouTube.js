const Parser = require('..');

class PlaylistSidebarSecondaryInfo {
  type = 'PlaylistSidebarSecondaryInfo';

  constructor(item) {
    this.owner = item.videoOwner && Parser.parseItem(item.videoOwner);
    this.button = item.button && Parser.parseItem(item.button);
  }
}

module.exports = PlaylistSidebarSecondaryInfo;