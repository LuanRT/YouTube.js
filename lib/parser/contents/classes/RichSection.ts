'use strict';

import Parser from '..';

class RichSection {
  type = 'RichSection';

  constructor(data) {
    this.contents = Parser.parse(data.content);
  }
}

export default RichSection;