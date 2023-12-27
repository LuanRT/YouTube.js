import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import { Parser } from '../../index.js';
import MenuNavigationItem from './MenuNavigationItem.js';
import MenuServiceItem from './MenuServiceItem.js';

export default class MenuPopup extends YTNode {
  static type = 'MenuPopup';

  items: ObservedArray<MenuNavigationItem | MenuServiceItem>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, [ MenuNavigationItem, MenuServiceItem ]);
  }
}