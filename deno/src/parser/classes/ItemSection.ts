import { YTNode, type ObservedArray } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ItemSectionHeader from './ItemSectionHeader.ts';
import ItemSectionTabbedHeader from './ItemSectionTabbedHeader.ts';
import CommentsHeader from './comments/CommentsHeader.ts';
import SortFilterHeader from './SortFilterHeader.ts';
import FeedFilterChipBar from './FeedFilterChipBar.ts';
import ChipBarView from './ChipBarView.ts';
import RelatedChipCloud from './RelatedChipCloud.ts';

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