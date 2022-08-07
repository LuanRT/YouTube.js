import Parser from '../index';
import ItemSectionHeader from './ItemSectionHeader';

import { YTNode } from '../helpers';

class ItemSection extends YTNode {
  static type = 'ItemSection';

  header: ItemSectionHeader | null;
  contents;
  target_id;

  constructor(data: any) {
    super();
    this.header = Parser.parseItem<ItemSectionHeader>(data.header, ItemSectionHeader);
    this.contents = Parser.parse(data.contents, true);

    if (data.targetId || data.sectionIdentifier) {
      this.target_id = data?.target_id || data?.sectionIdentifier;
    }
  }
}

export default ItemSection;