import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import ChipCloudChip from './ChipCloudChip.ts';

class FeedFilterChipBar extends YTNode {
  static type = 'FeedFilterChipBar';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray<ChipCloudChip>(data.contents, ChipCloudChip);
  }
}

export default FeedFilterChipBar;