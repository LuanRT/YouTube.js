'use strict';

const Text = require('../Text');

class UpdateDateTextAction {
  type = 'UpdateDateTextAction';

  constructor(data) {
    this.date_text = new Text(data.dateText).toString();
  }
}

module.exports = UpdateDateTextAction;