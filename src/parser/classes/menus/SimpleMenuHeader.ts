import Parser from '../../index.js';
import Text from '../misc/Text.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
class SimpleMenuHeader extends YTNode {
  static type = 'SimpleMenuHeader';

  title: Text;
  buttons;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.buttons = Parser.parse(data.buttons);
  }
}

export default SimpleMenuHeader;