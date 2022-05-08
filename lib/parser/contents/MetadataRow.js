const ResultsParser = require('.');
const Text = require('./Text');

class MetadataRow {
  type = 'MetadataRow';

  constructor(item) {
    this.contents = item.contents.map(content => new Text(content));
    this.title = new Text(item.title);
  }
}

module.exports = MetadataRow;