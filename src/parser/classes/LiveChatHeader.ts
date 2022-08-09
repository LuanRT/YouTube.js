import Parser from '../index';
import { YTNode } from '../helpers';

class LiveChatHeader extends YTNode {
  static type = 'LiveChatHeader';
  
  overflow_menu;
  collapse_button;
  view_selector;
  
  constructor(data: any) {
    super();
    this.overflow_menu = Parser.parse(data.overflowMenu);
    this.collapse_button = Parser.parse(data.collapseButton);
    this.view_selector = Parser.parse(data.viewSelector);
  }
}

export default LiveChatHeader;