'use strict';

const Author = require('./Author');

class PlaylistAuthor extends Author {
  constructor(data) {
    super(data);

    delete this.badges;
    delete this.is_verified;
    delete this.is_verified_artist;
  }
}

module.exports = PlaylistAuthor;