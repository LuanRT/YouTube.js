'use strict';

import Parser from '../..';

class ShowLiveChatActionPanelAction {
  type = 'ShowLiveChatActionPanelAction';

  constructor(data) {
    this.panel_to_show = Parser.parse(data.panelToShow, 'livechat');
  }
}

export default ShowLiveChatActionPanelAction;