import Parser from '../index.ts';
import Button from './Button.ts';
import ChipCloudChip from './ChipCloudChip.ts';

import { YTNode } from '../helpers.ts';

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
    this.next_button = Parser.parseItem<Button>(data.nextButton, Button);
    this.previous_button = Parser.parseItem<Button>(data.previousButton, Button);
    this.horizontal_scrollable = data.horizontalScrollable;
  }
}

export default ChipCloud;