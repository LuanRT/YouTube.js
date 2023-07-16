import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';

export default class MacroMarkersInfoItem extends YTNode {
  static type = 'MacroMarkersInfoItem';

  info_text: Text;
  menu: Menu | null;

  constructor(data: RawNode) {
    super();
    this.info_text = new Text(data.infoText);
    this.menu = Parser.parseItem(data.menu, Menu);
  }
}