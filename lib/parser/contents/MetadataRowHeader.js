const ResultsParser = require('.');
const Text = require('./Text');

class MetadataRowHeader {
  type = 'MetadataRowHeader';

  constructor(item) {
    this.text = new Text(item.content);
    this.has_divider_line = item.hasDividerLine;
  }
}

module.exports = MetadataRowHeader;