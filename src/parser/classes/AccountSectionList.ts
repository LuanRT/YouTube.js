import Parser from '../index.js';
import AccountChannel from './AccountChannel.js';
import AccountItemSection from './AccountItemSection.js';

import { YTNode } from '../helpers.js';

class AccountSectionList extends YTNode {
  static type = 'AccountSectionList';

  contents;
  footers;

  constructor(data: any) {
    super();
    this.contents = Parser.parseItem<AccountItemSection>(data.contents[0], AccountItemSection);
    this.footers = Parser.parseItem<AccountChannel>(data.footers[0], AccountChannel);
  }
}

export default AccountSectionList;