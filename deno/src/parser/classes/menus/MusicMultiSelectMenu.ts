import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import { Parser } from '../../index.ts';
import Text from '../misc/Text.ts';
import MusicMenuItemDivider from './MusicMenuItemDivider.ts';
import MusicMultiSelectMenuItem from './MusicMultiSelectMenuItem.ts';

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