'use strict';

const Text = require('./Text');

class ChannelMobileHeader {
  constructor(data) {
    this.title = new Text(data.title);
  }
}

module.exports = ChannelMobileHeader;