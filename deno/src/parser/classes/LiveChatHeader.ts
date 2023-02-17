import Parser from '../index.ts';
import type Menu from './menus/Menu.ts';
import type Button from './Button.ts';
import type SortFilterSubMenu from './SortFilterSubMenu.ts';
import { YTNode } from '../helpers.ts';

class LiveChatHeader extends YTNode {
  static type = 'LiveChatHeader';

  overflow_menu: Menu | null;
  collapse_button: Button | null;
  view_selector: SortFilterSubMenu | null;

  constructor(data: any) {
    super();
    this.overflow_menu = Parser.parseItem<Menu>(data.overflowMenu);
    this.collapse_button = Parser.parseItem<Button>(data.collapseButton);
    this.view_selector = Parser.parseItem<SortFilterSubMenu>(data.viewSelector);
  }
}

export default LiveChatHeader;