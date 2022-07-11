'use strict';

const Playlist = require('./Playlist');

class CompactPlaylist extends Playlist {
  type = 'CompactPlaylist';

  constructor(data) {
    super(data);
  }
}

module.exports = CompactPlaylist;