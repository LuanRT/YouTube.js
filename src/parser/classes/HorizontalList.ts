import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import NextContinuationData from './NextContinuationData.js';
import ReloadContinuationData from './ReloadContinuationData.js';

export default class HorizontalList extends YTNode {
  static type = 'HorizontalList';

  visible_item_count: string;
  items: ObservedArray<YTNode>;
  
  continuations?: ObservedArray<NextContinuationData | ReloadContinuationData>;

  constructor(data: RawNode) {
    super();
    this.visible_item_count = data.visibleItemCount;
    this.items = Parser.parseArray(data.items);
    this.continuations = Reflect.has(data, 'continuations') ? Parser.parseArray(data.continuations, [ NextContinuationData, ReloadContinuationData ]) : undefined;
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}