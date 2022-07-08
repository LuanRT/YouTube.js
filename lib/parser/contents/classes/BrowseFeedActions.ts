'use strict';

import Parser from '..';

class BrowseFeedActions {
  type = 'BrowseFeedActions';

  constructor(data) {
    this.contents = Parser.parse(data.contents);
  }
}

export default BrowseFeedActions;