const ResultsParser = require('.');

class PlaylistSidebarSecondaryInfo {
  type = 'PlaylistSidebarSecondaryInfo';

  constructor(item) {
    this.owner = item.videoOwner && ResultsParser.parseItem(item.videoOwner);
    this.button = item.button && ResultsParser.parseItem(item.button);
  }
}

module.exports = PlaylistSidebarSecondaryInfo;