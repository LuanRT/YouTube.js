'use strict';

import Playlist from './Playlist';

class CompactPlaylist extends Playlist {
  type = 'CompactPlaylist';

  constructor(data) {
    super(data);
  }
}

export default CompactPlaylist;