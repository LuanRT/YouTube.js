import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ItemSectionHeader from './ItemSectionHeader.js';
import ItemSectionTabbedHeader from './ItemSectionTabbedHeader.js';
import CommentsHeader from './comments/CommentsHeader.js';
import SortFilterHeader from './SortFilterHeader.js';
import FeedFilterChipBar from './FeedFilterChipBar.js';
import ChipBarView from './ChipBarView.js';
import RelatedChipCloud from './RelatedChipCloud.js';

export default class ItemSection extends YTNode {
  static type = 'ItemSection';

  public header: CommentsHeader | ItemSectionHeader | ItemSectionTabbedHeader | SortFilterHeader | FeedFilterChipBar | ChipBarView | RelatedChipCloud | null;
  public contents: ObservedArray<YTNode>;
  public target_id?: string;
  public continuation?: string;

  constructor(data: RawNode) {
    super();
    this.header = Parser.parseItem(data.header, [ CommentsHeader, ItemSectionHeader, ItemSectionTabbedHeader, SortFilterHeader, FeedFilterChipBar, ChipBarView, RelatedChipCloud ]);
    this.contents = Parser.parseArray(data.contents);

    if (data.targetId || data.sectionIdentifier) {
      this.target_id = data.targetId || data.sectionIdentifier;
    }

    if (data.continuations) {
      this.continuation = data.continuations?.[0]?.nextContinuationData?.continuation;
    }
  }
}