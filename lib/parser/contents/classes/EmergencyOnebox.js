'use strict';

const Text = require('./Text');
const Parser = require('..');
const NavigationEndpoint = require('./NavigationEndpoint');

class EmergencyOnebox {
  type = 'emergencyOneboxRenderer';
  
  constructor(data) {
    this.title = new Text(data.title);
    this.first_option = Parser.parse(data.firstOption);
    this.menu = Parser.parse(data.menu);
  }
}

module.exports = EmergencyOnebox;