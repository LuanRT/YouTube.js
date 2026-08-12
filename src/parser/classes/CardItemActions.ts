import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';
import type { RawNode } from '../index.js';

export default class CardItemActions extends YTNode {
  static type = 'CardItemActions';

  primary_button: YTNode | null;

  constructor(data: RawNode) {
    super();
    this.primary_button = Parser.parseItem(data.primaryButtonRenderer);
  }
}
