import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Text } from '../misc.js';

export default class ProductListHeader extends YTNode {
  static type = 'ProductListHeader';

  title: Text;
  suppress_padding_disclaimer: boolean;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.suppress_padding_disclaimer = !!data.suppressPaddingDisclaimer;
  }
}