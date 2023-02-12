import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import LiveChatActionPanel from './LiveChatActionPanel.js';

class ShowLiveChatActionPanelAction extends YTNode {
  static type = 'ShowLiveChatActionPanelAction';

  panel_to_show: LiveChatActionPanel | null;

  constructor(data: any) {
    super();
    this.panel_to_show = Parser.parseItem<LiveChatActionPanel>(data.panelToShow, LiveChatActionPanel);
  }
}

export default ShowLiveChatActionPanelAction;