'use strict';

const Text = require('./Text');

class FeedTabbedHeader {
  constructor(data) {
    this.title = new Text(data.title);
  }
}

module.exports = FeedTabbedHeader;