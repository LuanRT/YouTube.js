import Parser from '../index.js';
import ItemSectionHeader from './ItemSectionHeader.js';

import { YTNode } from '../helpers.js';
import ItemSectionTabbedHeader from './ItemSectionTabbedHeader.js';
import CommentsHeader from './comments/CommentsHeader.js';

class ItemSection extends YTNode {
  static type = 'ItemSection';

  header: CommentsHeader | ItemSectionHeader | ItemSectionTabbedHeader | null;
  contents;
  target_id?: string;
  continuation?: string;

  constructor(data: any) {
    super();
    this.header = Parser.parseItem<CommentsHeader | ItemSectionHeader | ItemSectionTabbedHeader>(data.header);
    this.contents = Parser.parse(data.contents, true);

    if (data.targetId || data.sectionIdentifier) {
      this.target_id = data?.target_id || data?.sectionIdentifier;
    }

    if (data.continuations) {
      this.continuation = data.continuations?.at(0)?.nextContinuationData?.continuation;
    }
  }
}

export default ItemSection;