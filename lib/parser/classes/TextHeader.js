'use strict';

const Text = require('./Text');

class TextHeader {
  type = 'TextHeader';

  constructor(data) {
    this.title = new Text(data.title);
    this.style = data.style;
  }
}

module.exports = TextHeader;