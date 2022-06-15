class PlaylistMetadata {
  type = 'PlaylistMetadata';

  constructor(data) {
    this.title = data.title;
    this.description = data.description;
    // XXX: Appindexing should be in microformat
  }
}

module.exports = PlaylistMetadata;