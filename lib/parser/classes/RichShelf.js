'use strict';

const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');
const Text = require('./Text');

class RichShelf {
  type = 'RichShelf';

  constructor(data) {
    this.title = new Text(data.title);
    this.contents = Parser.parse(data.contents);
    this.endpoint = data.endpoint ? new NavigationEndpoint(data.endpoint) : null;
  }
}

module.exports = RichShelf;