import { SuperParsedResult, YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import Parser from '../../index.js';
import Text from '../misc/Text.js';

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