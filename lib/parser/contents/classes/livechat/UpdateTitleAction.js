'use strict';

const Text = require('../Text');

class UpdateTitleAction {
  type = 'UpdateTitleAction';
  
  constructor(data) {
    this.title = new Text(data.title);
  }
}

module.exports = UpdateTitleAction;