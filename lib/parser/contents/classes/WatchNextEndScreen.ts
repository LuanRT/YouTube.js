'use strict';

import Parser from '..';
import Text from './Text';

class WatchNextEndScreen {
  constructor(data) {
    this.results = Parser.parse(data.results);
    this.title = new Text(data.title).toString();
  }
}

export default WatchNextEndScreen;