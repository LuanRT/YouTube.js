import Parser from '..';
import AccountChannel from './AccountChannel';
import AccountItemSection from './AccountItemSection';

import { YTNode } from '../helpers';

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