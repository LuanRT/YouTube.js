'use strict';

import Parser from '..';
import Text from './Text';

class SubFeedSelector {
  type = 'SubFeedSelector';

  constructor(data) {
    this.title = new Text(data.title);
    this.options = Parser.parse(data.options);
  }
}

export default SubFeedSelector;