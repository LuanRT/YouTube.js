'use strict';

const Parser = require('..');
const Text = require('./Text');

class WatchNextEndScreen {
  constructor(data) {
    this.results = Parser.parse(data.results);
    this.title = new Text(data.title).toString();
  }
}

module.exports = WatchNextEndScreen;