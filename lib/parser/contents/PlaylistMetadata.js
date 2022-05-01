const ResultsParser = require('.');

class PlaylistMetadata {
  type = 'PlaylistMetadata';

  constructor(item) {
    this.title = item.title;
    this.description = item.description;
    // XXX: Appindexing should be in microformat
  }
}

module.exports = PlaylistMetadata;