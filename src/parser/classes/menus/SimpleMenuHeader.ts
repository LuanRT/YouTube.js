import Parser from '../../index';
import Text from '../misc/Text';
import { YTNode } from '../../helpers';

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