import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import ChipCloud from './ChipCloud.js';

export default class SearchHeader extends YTNode {
  static type = 'SearchHeader';

  chip_bar: ChipCloud | null;
  search_filter_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.chip_bar = Parser.parseItem(data.chipBar, ChipCloud);
    this.search_filter_button = Parser.parseItem(data.searchFilterButton, Button);
  }
}