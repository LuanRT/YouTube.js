import Parser from '../index.ts';
import ItemSectionHeader from './ItemSectionHeader.ts';

import { YTNode } from '../helpers.ts';
import ItemSectionTabbedHeader from './ItemSectionTabbedHeader.ts';
import CommentsHeader from './comments/CommentsHeader.ts';

class ItemSection extends YTNode {
  static type = 'ItemSection';

  header: CommentsHeader | ItemSectionHeader | ItemSectionTabbedHeader | null;
  contents;
  target_id?: string;
  continuation?: string;

  constructor(data: any) {
    super();
    this.header = Parser.parseItem(data.header, [ CommentsHeader, ItemSectionHeader, ItemSectionTabbedHeader ]);
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