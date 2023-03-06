import Parser from '../../index.js';
import { YTNode } from '../../helpers.js';
import LiveChatActionPanel from './LiveChatActionPanel.js';
import type { RawNode } from '../../index.js';
class ShowLiveChatActionPanelAction extends YTNode {
  static type = 'ShowLiveChatActionPanelAction';

  panel_to_show: LiveChatActionPanel | null;

  constructor(data: RawNode) {
    super();
    this.panel_to_show = Parser.parseItem<LiveChatActionPanel>(data.panelToShow, LiveChatActionPanel);
  }
}

export default ShowLiveChatActionPanelAction;