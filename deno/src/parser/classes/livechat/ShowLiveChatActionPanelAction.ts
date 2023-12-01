import { Parser } from '../../index.ts';
import LiveChatActionPanel from './LiveChatActionPanel.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class ShowLiveChatActionPanelAction extends YTNode {
  static type = 'ShowLiveChatActionPanelAction';

  panel_to_show: LiveChatActionPanel | null;

  constructor(data: RawNode) {
    super();
    this.panel_to_show = Parser.parseItem(data.panelToShow, LiveChatActionPanel);
  }
}