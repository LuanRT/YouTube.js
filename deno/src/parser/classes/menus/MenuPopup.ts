import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { ObservedArray } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import MenuCustomIconItem from '../MenuCustomIconItem.ts';
import MenuNavigationItem from './MenuNavigationItem.ts';
import MenuServiceItem from './MenuServiceItem.ts';

export default class MenuPopup extends YTNode {
  static type = 'MenuPopup';

  public items: ObservedArray<MenuNavigationItem | MenuServiceItem | MenuCustomIconItem>;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items, [ MenuNavigationItem, MenuServiceItem, MenuCustomIconItem ]);
  }
}