'use strict';

import Text from './Text';

class MetadataRow {
  type = 'MetadataRow';

  constructor(data) {
    this.title = new Text(data.title);
    this.contents = data.contents.map((content) => new Text(content));
  }
}

export default MetadataRow;