import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import { Parser } from '../../index.js';
import Button from '../Button.js';
import Text from '../misc/Text.js';

export default class SimpleMenuHeader extends YTNode {
  static type = 'SimpleMenuHeader';

  title: Text;
  buttons: ObservedArray<Button>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.buttons = Parser.parseArray(data.buttons, Button);
  }
}