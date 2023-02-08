import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem.js';
import MusicMenuItemDivider from './MusicMenuItemDivider.js';
import { YTNode } from '../../helpers.js';
import Text from '../misc/Text.js';
import Parser from '../../index.js';

class MusicMultiSelectMenu extends YTNode {
  static type = 'MusicMultiSelectMenu';

  title: string;
  options: Array<MusicMultiSelectMenuItem | MusicMenuItemDivider>;

  constructor(data: any) {
    super();

    this.title = new Text(data.title.musicMenuTitleRenderer?.primaryText).toString();
    this.options = Parser.parseArray(data.options, [ MusicMultiSelectMenuItem, MusicMenuItemDivider ]);
  }
}

export default MusicMultiSelectMenu;