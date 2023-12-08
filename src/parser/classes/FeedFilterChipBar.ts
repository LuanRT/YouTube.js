import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ChipCloudChip from './ChipCloudChip.js';

export default class FeedFilterChipBar extends YTNode {
  static type = 'FeedFilterChipBar';

  contents: ObservedArray<ChipCloudChip>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, ChipCloudChip);
  }
}