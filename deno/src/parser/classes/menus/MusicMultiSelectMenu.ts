import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem.ts';
import MusicMenuItemDivider from './MusicMenuItemDivider.ts';
import { YTNode } from '../../helpers.ts';
import Text from '../misc/Text.ts';
import Parser from '../../index.ts';

class MusicMultiSelectMenu extends YTNode {
  static type = 'MusicMultiSelectMenu';

  title: string;
  options: Array<MusicMultiSelectMenuItem | MusicMenuItemDivider>;

  constructor(data: any) {
    super();

    this.title = new Text(data.title.musicMenuTitleRenderer?.primaryText).text;
    this.options = Parser.parseArray(data.options, [ MusicMultiSelectMenuItem, MusicMenuItemDivider ]);
  }
}

export default MusicMultiSelectMenu;