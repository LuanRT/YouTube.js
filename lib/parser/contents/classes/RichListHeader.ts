'use strict';

import Text from './Text';

class RichListHeader {
  constructor(data) {
    this.title = new Text(data.title);
    this.icon_type = data.icon.iconType;
  }
}

export default RichListHeader;