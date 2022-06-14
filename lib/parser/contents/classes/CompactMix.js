'use strict';

const Playlist = require('./Playlist');

class CompactMix extends Playlist {
  type = 'CompactMix';
  
  constructor(data) {
    super(data);
  }
}

module.exports = CompactMix;