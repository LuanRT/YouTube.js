import Parser, { RawData } from '../index.js';
import AccountChannel from './AccountChannel.js';
import AccountItemSection from './AccountItemSection.js';

import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
class AccountSectionList extends YTNode {
  static type = 'AccountSectionList';

  contents;
  footers;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseItem<AccountItemSection>(data.contents[0], AccountItemSection);
    this.footers = Parser.parseItem<AccountChannel>(data.footers[0], AccountChannel);
  }
}

export default AccountSectionList;