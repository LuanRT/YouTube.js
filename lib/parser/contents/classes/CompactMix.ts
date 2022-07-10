'use strict';

import Playlist from './Playlist';

class CompactMix extends Playlist {
  type = 'CompactMix';

  constructor(data) {
    super(data);
  }
}

export default CompactMix;