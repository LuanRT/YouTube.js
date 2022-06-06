'use strict';

const NavigationEndpoint = require('./NavigationEndpoint');

class TextRun {
  constructor(data) {
    this.text = data.text;
    this.endpoint = data.navigationEndpoint && new NavigationEndpoint(data.navigationEndpoint) || {};
  }
}

module.exports = TextRun;