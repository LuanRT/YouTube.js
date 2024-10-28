import { Parser } from '../index.ts';
import AccountItem from './AccountItem.ts';
import AccountItemSectionHeader from './AccountItemSectionHeader.ts';
import { YTNode, type ObservedArray } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import CompactLink from './CompactLink.ts';

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