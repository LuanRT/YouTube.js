import Parser from '../index';

import { YTNode } from '../helpers';
import MusicMultiSelectMenu from './menus/MusicMultiSelectMenu';
import Text from './misc/Text';

class MusicSortFilterButton extends YTNode {
  static type = 'MusicSortFilterButton';

  title: string;
  icon_type: string;
  menu: MusicMultiSelectMenu | null;

  constructor(data: any) {
    super();

    this.title = new Text(data.title).text;
    this.icon_type = data.icon?.icon_type || null;
    this.menu = Parser.parseItem(data.menu, MusicMultiSelectMenu);
  }
}

export default MusicSortFilterButton;