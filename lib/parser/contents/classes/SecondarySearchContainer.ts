'use strict';

import Parser from '..';

class SecondarySearchContainer {
  type = 'SecondarySearchContainer';

  constructor(data) {
    this.contents = Parser.parse(data.contents);
  }
}

export default SecondarySearchContainer;