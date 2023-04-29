import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import Button from './Button.ts';
import ChipCloudChip from './ChipCloudChip.ts';

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