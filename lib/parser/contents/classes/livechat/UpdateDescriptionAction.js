'use strict';

const Text = require('../Text');

class UpdateDescriptionAction {
  type = 'UpdateDescriptionAction';
  
  constructor(data) {
    this.description = new Text(data.description);
  }
}

module.exports = UpdateDescriptionAction;