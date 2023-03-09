import Parser from '../index.js';
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
    this.contents = Parser.parseItem(data.contents[0], AccountItemSection);
    this.footers = Parser.parseItem(data.footers[0], AccountChannel);
  }
}

export default AccountSectionList;