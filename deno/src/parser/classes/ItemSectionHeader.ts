import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class ItemSectionHeader extends YTNode {
  static type = 'ItemSectionHeader';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}