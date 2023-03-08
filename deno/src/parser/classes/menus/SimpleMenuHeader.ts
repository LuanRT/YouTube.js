import Parser from '../../index.ts';
import Text from '../misc/Text.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
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