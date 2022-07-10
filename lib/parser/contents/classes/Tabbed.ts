'use strict';

import Parser from '..';

class Tabbed {
  type = 'Tabbed';

  constructor(data) {
    return Parser.parse(data);
  }
}

export default Tabbed;