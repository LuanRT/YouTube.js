'use strict';

const Parser = require('..');
const Text = require('./Text');
const Thumbnail = require('./Thumbnail');

class PlayerErrorMessage {
  type = 'playerErrorMessageRenderer';
  
  constructor(data) {
    this.subreason = new Text(data.subreason);
    this.reason = new Text(data.reason);
    this.proceed_button = Parser.parse(data.proceedButton);
    this.thumbnails = new Thumbnail(data.thumbnail).thumbnails;
    this.icon_type = data.icon.iconType;
  }
}

module.exports = PlayerErrorMessage;