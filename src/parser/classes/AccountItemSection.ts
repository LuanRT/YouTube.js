import Parser from '../index.js';

import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import AccountItemSectionHeader from './AccountItemSectionHeader.js';

import { YTNode } from '../helpers.js';

class AccountItem {
  static type = 'AccountItem';

  account_name: Text;
  account_photo: Thumbnail[];
  is_selected: boolean;
  is_disabled: boolean;
  has_channel: boolean;
  endpoint: NavigationEndpoint;
  account_byline: Text;

  constructor(data: any) {
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

  constructor(data: any) {
    super();
    this.contents = data.contents.map((ac: any) => new AccountItem(ac.accountItem));
    this.header = Parser.parseItem<AccountItemSectionHeader>(data.header, AccountItemSectionHeader);
  }
}

export default AccountItemSection;