'use strict';

import Text from './Text';

class FeedTabbedHeader {
  constructor(data) {
    this.title = new Text(data.title);
  }
}

export default FeedTabbedHeader;