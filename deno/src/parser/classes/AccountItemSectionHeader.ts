import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class AccountItemSectionHeader extends YTNode {
  static type = 'AccountItemSectionHeader';

  title: Text;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
  }
}