'use strict';

const Parser = require('../..');

class ShowLiveChatActionPanelAction {
  type = 'ShowLiveChatActionPanelAction';

  constructor(data) {
    this.panel_to_show = Parser.parse(data.panelToShow, 'livechat');
  }
}

module.exports = ShowLiveChatActionPanelAction;