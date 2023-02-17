import Parser from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import LiveChatActionPanel from './LiveChatActionPanel.ts';

class ShowLiveChatActionPanelAction extends YTNode {
  static type = 'ShowLiveChatActionPanelAction';

  panel_to_show: LiveChatActionPanel | null;

  constructor(data: any) {
    super();
    this.panel_to_show = Parser.parseItem<LiveChatActionPanel>(data.panelToShow, LiveChatActionPanel);
  }
}

export default ShowLiveChatActionPanelAction;