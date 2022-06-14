const Parser = require('..');

class MetadataRowContainer {
  type = 'MetadataRowContainer';

  constructor(item) {
    this.rows = item.rows && Parser.parse(item.rows) || [];
  }
}

module.exports = MetadataRowContainer;