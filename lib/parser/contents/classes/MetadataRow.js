'use strict';

const Text = require('./Text');

class MetadataRow {
  type = 'MetadataRow';
  
  constructor(data) {
    this.title = new Text(data.title);
    this.contents = data.contents.map((content) => new Text(content));
  }
}

module.exports = MetadataRow;