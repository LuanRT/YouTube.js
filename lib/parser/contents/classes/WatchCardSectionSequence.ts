'use strict';

import Parser from '..';

class WatchCardSectionSequence {
  type = 'WatchCardSectionSequence';

  constructor(data) {
    this.lists = Parser.parse(data.lists);
  }
}

export default WatchCardSectionSequence;