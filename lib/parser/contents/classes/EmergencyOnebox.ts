'use strict';

const Text = require('./Text');
const Parser = require('..');

class EmergencyOnebox {
  type = 'EmergencyOnebox';

  constructor(data) {
    this.title = new Text(data.title);
    this.first_option = Parser.parse(data.firstOption);
    this.menu = Parser.parse(data.menu);
  }
}

module.exports = EmergencyOnebox;