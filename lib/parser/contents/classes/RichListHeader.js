'use strict';

const Text = require('./Text');

class RichListHeader {
  constructor(data) {
    this.title = new Text(data.title);
    this.icon_type = data.icon.iconType;
  }
}

module.exports = RichListHeader;