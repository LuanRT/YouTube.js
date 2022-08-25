import Text from './misc/Text';
import { YTNode } from '../helpers';

class AccountItemSectionHeader extends YTNode {
  static type = 'AccountItemSectionHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default AccountItemSectionHeader;