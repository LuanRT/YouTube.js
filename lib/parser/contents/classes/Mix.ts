'use strict';

import Playlist from './Playlist';

class Mix extends Playlist {
  type = 'Mix';

  constructor(data) {
    super(data);
  }
}

export default Mix;