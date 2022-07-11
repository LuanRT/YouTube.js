'use strict';

const Parser = require('../..');

class OpenPopupAction {
  type = 'OpenPopupAction';
  
  constructor(data) {
    this.popup = Parser.parse(data.popup);
    this.popup_type = data.popupType;
  }
}

module.exports = OpenPopupAction;