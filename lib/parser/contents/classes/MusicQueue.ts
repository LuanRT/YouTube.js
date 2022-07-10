'use strict';

import Parser from '..';

class MusicQueue {
  type = 'MusicQueue';

  constructor(data) {
    this.content = Parser.parse(data.content);
  }
}

export default MusicQueue;