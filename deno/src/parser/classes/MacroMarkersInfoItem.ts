import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Menu from './menus/Menu.ts';
import Text from './misc/Text.ts';

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