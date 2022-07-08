'use strict';

const Parser = require('..');
const Text = require('./Text');

class ChannelFeaturedContent {
  type = 'ChannelFeaturedContent';

  constructor(data) {
    this.title = new Text(data.title);
    this.items = Parser.parse(data.items);
  }
}

module.exports = ChannelFeaturedContent;