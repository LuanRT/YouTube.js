import { Parser } from '../../index.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import MultiPageMenu from '../menus/MultiPageMenu.ts';

export default class GetMultiPageMenuAction extends YTNode {
  static type = 'GetMultiPageMenuAction';
  
  public menu: MultiPageMenu | null;
  
  constructor(data: RawNode) {
    super();
    this.menu = Parser.parseItem(data.menu, MultiPageMenu);
  }
}