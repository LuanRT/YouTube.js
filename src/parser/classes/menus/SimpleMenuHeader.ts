import Parser from '../../index.js';
import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';

class SimpleMenuHeader extends YTNode {
  static type = 'SimpleMenuHeader';

  title: Text;
  buttons;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.buttons = Parser.parse(data.buttons);
  }
}

export default SimpleMenuHeader;