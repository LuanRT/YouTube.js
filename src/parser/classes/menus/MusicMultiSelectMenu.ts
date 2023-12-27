import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import { Parser } from '../../index.js';
import Text from '../misc/Text.js';
import MusicMenuItemDivider from './MusicMenuItemDivider.js';
import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem.js';

export default class MusicMultiSelectMenu extends YTNode {
  static type = 'MusicMultiSelectMenu';

  title?: Text;
  options: ObservedArray<MusicMultiSelectMenuItem | MusicMenuItemDivider>;

  constructor(data: RawNode) {
    super();
    if (Reflect.has(data, 'title') && Reflect.has(data.title, 'musicMenuTitleRenderer')) {
      this.title = new Text(data.title.musicMenuTitleRenderer?.primaryText);
    }

    this.options = Parser.parseArray(data.options, [ MusicMultiSelectMenuItem, MusicMenuItemDivider ]);
  }
}