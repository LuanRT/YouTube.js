import Text from './misc/Text.js';
import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class EmergencyOnebox extends YTNode {
  static type = 'EmergencyOnebox';

  title: Text;
  first_option;
  menu;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.first_option = Parser.parse(data.firstOption);
    this.menu = Parser.parse(data.menu);
  }
}

export default EmergencyOnebox;