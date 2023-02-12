import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class ItemSectionHeader extends YTNode {
  static type = 'ItemSectionHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default ItemSectionHeader;