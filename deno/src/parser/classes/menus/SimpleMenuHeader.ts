import type { ObservedArray } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import { Parser } from '../../index.ts';
import Button from '../Button.ts';
import Text from '../misc/Text.ts';

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