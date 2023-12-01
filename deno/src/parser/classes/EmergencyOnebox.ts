import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Menu from './menus/Menu.ts';
import Text from './misc/Text.ts';

export default class EmergencyOnebox extends YTNode {
  static type = 'EmergencyOnebox';

  title: Text;
  first_option: YTNode;
  menu: Menu | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.first_option = Parser.parseItem(data.firstOption);
    this.menu = Parser.parseItem(data.menu, Menu);
  }
}