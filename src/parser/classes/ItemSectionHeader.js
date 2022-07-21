import Text from './misc/Text';
import { YTNode } from '../helpers';

class ItemSectionHeader extends YTNode {
  static type = 'ItemSectionHeader';

  constructor(data) {
    super();
    this.title = new Text(data.title);
  }
}

export default ItemSectionHeader;