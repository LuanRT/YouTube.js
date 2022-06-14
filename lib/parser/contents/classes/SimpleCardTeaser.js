'use strict';

const Text = require('./Text');

class SimpleCardTeaser {
  type = 'SimpleCardTeaser';
  
  constructor(data) {
    this.message = new Text(data.message);
    this.prominent = data.prominent;
  }
}

module.exports = SimpleCardTeaser;