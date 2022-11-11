import Parser from '../index';
import ItemSectionHeader from './ItemSectionHeader';

import { YTNode } from '../helpers';
import ItemSectionTabbedHeader from './ItemSectionTabbedHeader';
import CommentsHeader from './comments/CommentsHeader';

class ItemSection extends YTNode {
  static type = 'ItemSection';

  header: CommentsHeader | ItemSectionHeader | ItemSectionTabbedHeader | null;
  contents;
  target_id;

  constructor(data: any) {
    super();
    this.header = Parser.parseItem<CommentsHeader | ItemSectionHeader | ItemSectionTabbedHeader>(data.header);
    this.contents = Parser.parse(data.contents, true);

    if (data.targetId || data.sectionIdentifier) {
      this.target_id = data?.target_id || data?.sectionIdentifier;
    }
  }
}

export default ItemSection;