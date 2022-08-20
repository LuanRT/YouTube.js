import Parser from '../index';

import { YTNode } from '../helpers';
import ChipCloudChip from './ChipCloudChip';

class ChipCloud extends YTNode {
  static type = 'ChipCloud';

  chips;
  next_button;
  previous_button;
  horizontal_scrollable;

  constructor(data: any) {
    super();
    // TODO: check this assumption that chipcloudchip is always returned
    this.chips = Parser.parseArray<ChipCloudChip>(data.chips, ChipCloudChip);
    this.next_button = Parser.parse(data.nextButton);
    this.previous_button = Parser.parse(data.previousButton);
    this.horizontal_scrollable = data.horizontalScrollable;
  }
}

export default ChipCloud;