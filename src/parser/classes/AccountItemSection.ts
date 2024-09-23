import { Parser } from '../index.js';
import AccountItem from './AccountItem.js';
import AccountItemSectionHeader from './AccountItemSectionHeader.js';
import { YTNode, observe, type ObservedArray } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class AccountItemSection extends YTNode {
  static type = 'AccountItemSection';

  contents: ObservedArray<AccountItem>;
  header: AccountItemSectionHeader | null;

  constructor(data: RawNode) {
    super();
    this.contents = observe<AccountItem>(data.contents.map((ac: RawNode) => new AccountItem(ac.accountItem)));
    this.header = Parser.parseItem(data.header, AccountItemSectionHeader);
  }
}