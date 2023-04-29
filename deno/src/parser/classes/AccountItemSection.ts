import Parser from '../index.ts';
import AccountItemSectionHeader from './AccountItemSectionHeader.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

import { YTNode, observe, type ObservedArray } from '../helpers.ts';
import type { RawNode } from '../index.ts';

/**
 * Not a real renderer but we treat it as one to keep things organized.
 */
export class AccountItem extends YTNode {
  static type = 'AccountItem';

  account_name: Text;
  account_photo: Thumbnail[];
  is_selected: boolean;
  is_disabled: boolean;
  has_channel: boolean;
  endpoint: NavigationEndpoint;
  account_byline: Text;

  constructor(data: RawNode) {
    super();
    this.account_name = new Text(data.accountName);
    this.account_photo = Thumbnail.fromResponse(data.accountPhoto);
    this.is_selected = !!data.isSelected;
    this.is_disabled = !!data.isDisabled;
    this.has_channel = !!data.hasChannel;
    this.endpoint = new NavigationEndpoint(data.serviceEndpoint);
    this.account_byline = new Text(data.accountByline);
  }
}

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