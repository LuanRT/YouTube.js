import { Parser } from '../index.js';
import AccountItem from './AccountItem.js';
import AccountItemSectionHeader from './AccountItemSectionHeader.js';
import { YTNode, type ObservedArray } from '../helpers.js';
import type { RawNode } from '../index.js';
import CompactLink from './CompactLink.js';

export default class AccountItemSection extends YTNode {
  static type = 'AccountItemSection';

  public contents: ObservedArray<AccountItem | CompactLink>;
  public header: AccountItemSectionHeader | null;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, [ AccountItem, CompactLink ]);
    this.header = Parser.parseItem(data.header, AccountItemSectionHeader);
  }
}