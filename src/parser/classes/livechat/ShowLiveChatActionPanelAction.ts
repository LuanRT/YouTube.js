import Parser from '../../index';
import { YTNode } from '../../helpers';
import LiveChatActionPanel from './LiveChatActionPanel';

class ShowLiveChatActionPanelAction extends YTNode {
  static type = 'ShowLiveChatActionPanelAction';

  panel_to_show: LiveChatActionPanel | null;

  constructor(data: any) {
    super();
    this.panel_to_show = Parser.parseItem<LiveChatActionPanel>(data.panelToShow, LiveChatActionPanel);
  }
}

export default ShowLiveChatActionPanelAction;