import type { SuperParsedResult } from '../../helpers.ts';
import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';
import { Parser } from '../../index.ts';
import Text from '../misc/Text.ts';

export default class SimpleMenuHeader extends YTNode {
  static type = 'SimpleMenuHeader';

  title: Text;
  buttons: SuperParsedResult<YTNode>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    // @TODO: Check if this is of type `Button`.
    this.buttons = Parser.parse(data.buttons);
  }
}