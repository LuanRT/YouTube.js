const ResultsParser = require('.');
const Text = require('./Text');

class MetadataRowHeader {
  type = 'MetadataRowHeader';

  constructor(item) {
    this.text = new Text(item.content);
  }
}

module.exports = MetadataRowHeader;