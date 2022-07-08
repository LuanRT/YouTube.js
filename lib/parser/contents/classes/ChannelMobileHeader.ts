'use strict';

import Text from './Text';

class ChannelMobileHeader {
  constructor(data) {
    this.title = new Text(data.title);
  }
}

export default ChannelMobileHeader;