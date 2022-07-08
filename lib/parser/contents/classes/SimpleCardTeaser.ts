'use strict';

import Text from './Text';

class SimpleCardTeaser {
  type = 'SimpleCardTeaser';

  constructor(data) {
    this.message = new Text(data.message);
    this.prominent = data.prominent;
  }
}

export default SimpleCardTeaser;