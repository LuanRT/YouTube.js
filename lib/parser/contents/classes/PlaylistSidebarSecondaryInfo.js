const Parser = require('..');

class PlaylistSidebarSecondaryInfo {
  type = 'PlaylistSidebarSecondaryInfo';

  constructor(data) {
    this.owner = data.videoOwner && Parser.parse(data.videoOwner);
    this.button = data.button && Parser.parse(data.button);
  }
}

module.exports = PlaylistSidebarSecondaryInfo;