import Parser from '../../index.ts';
import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';

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