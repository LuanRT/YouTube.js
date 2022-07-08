'use strict';

import Parser from '..';

class MusicHeader {
  type = 'MusicHeader';

  constructor(data) {
    this.header = Parser.parse(data.header);
  }
}

export default MusicHeader;