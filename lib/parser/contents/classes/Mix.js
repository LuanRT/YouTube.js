'use strict';

const Playlist = require('./Playlist');

class Mix extends Playlist {
  type = 'Mix';
  
  constructor(data) {
    super(data);
  }
}

module.exports = Mix;