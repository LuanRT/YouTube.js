'use strict';

const Text = require('./Text');

class Message {
  type = 'Message';

  constructor(data) {
    this.text = new Text(data.text).toString();
  }
}

module.exports = Message;