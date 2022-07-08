'use strict';

const Text = require('./Text');

class MetadataRowHeader {
  type = 'MetadataRowHeader';

  constructor(data) {
    this.content = new Text(data.content);
    this.has_divider_line = data.hasDividerLine;
  }
}

module.exports = MetadataRowHeader;