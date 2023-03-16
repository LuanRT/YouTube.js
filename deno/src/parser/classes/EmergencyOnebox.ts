import { YTNode } from '../helpers.ts';
import Parser, { RawNode } from '../index.ts';
import Text from './misc/Text.ts';

class EmergencyOnebox extends YTNode {
  static type = 'EmergencyOnebox';

  title: Text;
  first_option;
  menu;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.first_option = Parser.parseItem(data.firstOption);
    this.menu = Parser.parseItem(data.menu);
  }
}

export default EmergencyOnebox;