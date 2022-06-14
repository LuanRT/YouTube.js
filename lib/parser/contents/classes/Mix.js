'use strict';

const Playlist = require('./Playlist');

class Mix extends Playlist {
  type = 'radioRenderer';
  
  constructor(data) {
    super(data);
  }
}

module.exports = Mix;