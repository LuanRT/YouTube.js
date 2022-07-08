'use strict';

import Parser from '..';

class RichItem {
  type = 'RichItem';

  constructor(data) {
    return Parser.parse(data.content);
  }
}

export default RichItem;