import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

class ItemSectionHeader extends YTNode {
  static type = 'ItemSectionHeader';

  title: Text;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
  }
}

export default ItemSectionHeader;