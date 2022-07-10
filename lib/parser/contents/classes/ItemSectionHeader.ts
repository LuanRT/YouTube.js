'use strict';

import Text from './Text';

class ItemSectionHeader {
  constructor(data) {
    this.title = new Text(data.title);
  }
}

export default ItemSectionHeader;