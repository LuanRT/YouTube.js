import type { ObservedArray} from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import { Parser } from '../../index.ts';
import MenuNavigationItem from './MenuNavigationItem.ts';
import MenuServiceItem from './MenuServiceItem.ts';

export default class MenuPopup extends YTNode {
  static type = 'MenuPopup';

  items: ObservedArray<MenuNavigationItem | MenuServiceItem>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, [ MenuNavigationItem, MenuServiceItem ]);
  }
}