import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem';
import MusicMenuItemDivider from './MusicMenuItemDivider';
import { YTNode } from '../../helpers';
import Text from '../misc/Text';
import Parser from '../..';

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