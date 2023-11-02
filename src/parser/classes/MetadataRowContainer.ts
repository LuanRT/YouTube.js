import { Parser, type RawNode } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';

export default class MetadataRowContainer extends YTNode {
  static type = 'MetadataRowContainer';

  rows: ObservedArray<YTNode>;
  collapsed_item_count: number;

  constructor(data: RawNode) {
    super();
    this.rows = Parser.parseArray(data.rows);
    this.collapsed_item_count = data.collapsedItemCount;
  }
}