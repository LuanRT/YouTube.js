import Parser, { type RawNode } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';
import Button from './Button.ts';

export default class HorizontalMovieList extends YTNode {
  static type = 'HorizontalMovieList';

  items: ObservedArray<YTNode>;
  previous_button: Button | null;
  next_button: Button | null;

  constructor(data: RawNode) {
    super();
    this.items = Parser.parseArray(data.items);
    this.previous_button = Parser.parseItem(data.previousButton, Button);
    this.next_button = Parser.parseItem(data.nextButton, Button);
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}