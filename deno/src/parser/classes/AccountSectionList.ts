import Parser from '../index.ts';
import AccountChannel from './AccountChannel.ts';
import AccountItemSection from './AccountItemSection.ts';

import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
class AccountSectionList extends YTNode {
  static type = 'AccountSectionList';

  contents;
  footers;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseItem(data.contents[0], AccountItemSection);
    this.footers = Parser.parseItem(data.footers[0], AccountChannel);
  }
}

export default AccountSectionList;