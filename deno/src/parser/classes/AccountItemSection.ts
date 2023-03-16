import Parser from '../index.ts';

import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import AccountItemSectionHeader from './AccountItemSectionHeader.ts';

import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

class AccountItem {
  static type = 'AccountItem';

  account_name: Text;
  account_photo: Thumbnail[];
  is_selected: boolean;
  is_disabled: boolean;
  has_channel: boolean;
  endpoint: NavigationEndpoint;
  account_byline: Text;

  constructor(data: RawNode) {
    this.account_name = new Text(data.accountName);
    this.account_photo = Thumbnail.fromResponse(data.accountPhoto);
    this.is_selected = data.isSelected;
    this.is_disabled = data.isDisabled;
    this.has_channel = data.hasChannel;
    this.endpoint = new NavigationEndpoint(data.serviceEndpoint);
    this.account_byline = new Text(data.accountByline);
  }
}

class AccountItemSection extends YTNode {
  static type = 'AccountItemSection';

  contents;
  header;

  constructor(data: RawNode) {
    super();
    this.contents = data.contents.map((ac: any) => new AccountItem(ac.accountItem));
    this.header = Parser.parseItem(data.header, AccountItemSectionHeader);
  }
}

export default AccountItemSection;