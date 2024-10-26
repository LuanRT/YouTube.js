import { Parser } from '../index.js';
import AccountChannel from './AccountChannel.js';
import AccountItemSection from './AccountItemSection.js';

import type { RawNode } from '../index.js';
import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';

export default class AccountSectionList extends YTNode {
  static type = 'AccountSectionList';

  public contents: ObservedArray<AccountItemSection>;
  public footers: ObservedArray<AccountChannel>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, AccountItemSection);
    this.footers = Parser.parseArray(data.footers, AccountChannel);
  }
}