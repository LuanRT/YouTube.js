import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import ChipCloudChip from './ChipCloudChip.js';

class FeedFilterChipBar extends YTNode {
  static type = 'FeedFilterChipBar';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray<ChipCloudChip>(data.contents, ChipCloudChip);
  }
}

export default FeedFilterChipBar;