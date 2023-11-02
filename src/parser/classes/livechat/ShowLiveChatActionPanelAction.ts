import { Parser } from '../../index.js';
import LiveChatActionPanel from './LiveChatActionPanel.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class ShowLiveChatActionPanelAction extends YTNode {
  static type = 'ShowLiveChatActionPanelAction';

  panel_to_show: LiveChatActionPanel | null;

  constructor(data: RawNode) {
    super();
    this.panel_to_show = Parser.parseItem(data.panelToShow, LiveChatActionPanel);
  }
}