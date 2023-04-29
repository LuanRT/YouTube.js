import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import ChipCloudChip from './ChipCloudChip.ts';

export default class FeedFilterChipBar extends YTNode {
  static type = 'FeedFilterChipBar';

  contents: ObservedArray<ChipCloudChip>;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents, ChipCloudChip);
  }
}