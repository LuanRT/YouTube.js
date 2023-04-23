import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class ItemSectionHeader extends YTNode {
  static type = 'ItemSectionHeader';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}