import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import ChipCloudChip from './ChipCloudChip.js';

export default class ChipCloud extends YTNode {
  static type = 'ChipCloud';

  chips: ObservedArray<ChipCloudChip>;
  next_button: Button | null;
  previous_button: Button | null;
  horizontal_scrollable: boolean;

  constructor(data: RawNode) {
    super();
    this.chips = Parser.parseArray(data.chips, ChipCloudChip);
    this.next_button = Parser.parseItem(data.nextButton, Button);
    this.previous_button = Parser.parseItem(data.previousButton, Button);
    this.horizontal_scrollable = data.horizontalScrollable;
  }
}