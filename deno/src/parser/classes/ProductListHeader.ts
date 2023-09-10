import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Text } from '../misc.ts';

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