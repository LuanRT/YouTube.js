import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class AccountItemSectionHeader extends YTNode {
  static type = 'AccountItemSectionHeader';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}