'use strict';

import Parser from '..';

class BackstagePostThread {
  type = 'BackstagePostThread';

  constructor(data) {
    this.post = Parser.parse(data.post);
  }
}

export default BackstagePostThread;