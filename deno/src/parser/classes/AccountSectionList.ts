import { Parser } from '../index.ts';
import AccountChannel from './AccountChannel.ts';
import AccountItemSection from './AccountItemSection.ts';

import type { RawNode } from '../index.ts';
import type { ObservedArray } from '../helpers.ts';
import { YTNode } from '../helpers.ts';

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