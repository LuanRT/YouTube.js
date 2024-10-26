import { Parser } from '../../index.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import MultiPageMenu from '../menus/MultiPageMenu.js';

export default class GetMultiPageMenuAction extends YTNode {
  static type = 'GetMultiPageMenuAction';
  
  public menu: MultiPageMenu | null;
  
  constructor(data: RawNode) {
    super();
    this.menu = Parser.parseItem(data.menu, MultiPageMenu);
  }
}