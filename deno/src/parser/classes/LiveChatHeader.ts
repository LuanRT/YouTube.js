import Parser from '../index.ts';
import Menu from './menus/Menu.ts';
import Button from './Button.ts';
import SortFilterSubMenu from './SortFilterSubMenu.ts';
import { YTNode } from '../helpers.ts';

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