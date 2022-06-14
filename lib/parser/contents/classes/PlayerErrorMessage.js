'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class PlayerErrorMessage {
  type = 'PlayerErrorMessage';
  
  constructor(data) {
    this.subreason = new Text(data.subreason);
    this.reason = new Text(data.reason);
    this.proceed_button = Parser.parse(data.proceedButton);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.icon_type = data.icon.iconType;
  }
}

module.exports = PlayerErrorMessage;