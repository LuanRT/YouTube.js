import Parser from '../index';
import { YTNode } from '../helpers';
import ChipCloudChip from './ChipCloudChip';

class FeedFilterChipBar extends YTNode {
  static type = 'FeedFilterChipBar';

  contents;

  constructor(data: any) {
    super();
    this.contents = Parser.parseArray<ChipCloudChip>(data.contents, ChipCloudChip);
  }
}

export default FeedFilterChipBar;