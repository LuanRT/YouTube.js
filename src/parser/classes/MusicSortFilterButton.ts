import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import MusicMultiSelectMenu from './menus/MusicMultiSelectMenu.js';
import Text from './misc/Text.js';

export default class MusicSortFilterButton extends YTNode {
  static type = 'MusicSortFilterButton';

  title: string;
  icon_type?: string;
  menu: MusicMultiSelectMenu | null;

  constructor(data: RawNode) {
    super();

    this.title = new Text(data.title).toString();

    if (Reflect.has(data, 'icon')) {
      this.icon_type = data.icon.iconType;
    }

    this.menu = Parser.parseItem(data.menu, MusicMultiSelectMenu);
  }
}