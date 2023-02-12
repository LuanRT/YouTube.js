import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class AccountItemSectionHeader extends YTNode {
  static type = 'AccountItemSectionHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default AccountItemSectionHeader;