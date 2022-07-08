'use strict';

import Parser from '..';

class FeedFilterChipBar {
  type = 'FeedFilterChipBar';

  constructor(data) {
    this.contents = Parser.parse(data.contents);
  }
}

export default FeedFilterChipBar;