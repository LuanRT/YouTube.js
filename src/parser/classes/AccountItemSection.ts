import Parser from '..';

import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import AccountItemSectionHeader from './AccountItemSectionHeader';

import { YTNode } from '../helpers';

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