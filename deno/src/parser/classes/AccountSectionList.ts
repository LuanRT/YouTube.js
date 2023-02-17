import Parser from '../index.ts';
import AccountChannel from './AccountChannel.ts';
import AccountItemSection from './AccountItemSection.ts';

import { YTNode } from '../helpers.ts';

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