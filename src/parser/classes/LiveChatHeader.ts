import Parser from '../index.js';
import Menu from './menus/Menu.js';
import Button from './Button.js';
import SortFilterSubMenu from './SortFilterSubMenu.js';
import { YTNode } from '../helpers.js';

class LiveChatHeader extends YTNode {
  static type = 'LiveChatHeader';

  overflow_menu: Menu | null;
  collapse_button: Button | null;
  view_selector: SortFilterSubMenu | null;

  constructor(data: any) {
    super();
    this.overflow_menu = Parser.parseItem(data.overflowMenu, Menu);
    this.collapse_button = Parser.parseItem(data.collapseButton, Button);
    this.view_selector = Parser.parseItem(data.viewSelector, SortFilterSubMenu);
  }
}

export default LiveChatHeader;