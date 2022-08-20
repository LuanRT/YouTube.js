import Parser from '../../index';
import { YTNode } from '../../helpers';

class ShowLiveChatActionPanelAction extends YTNode {
  static type = 'ShowLiveChatActionPanelAction';

  panel_to_show;

  constructor(data: any) {
    super();
    this.panel_to_show = Parser.parse(data.panelToShow);
  }
}

export default ShowLiveChatActionPanelAction;