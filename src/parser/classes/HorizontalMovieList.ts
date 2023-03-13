import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import Button from './Button.js';

class HorizontalMovieList extends YTNode {
  static type = 'HorizontalMovieList';

  items;
  previous_button: Button | null;
  next_button: Button | null;

  constructor(data: any) {
    super();
    this.items = Parser.parseArray(data.items);
    this.previous_button = Parser.parseItem<Button>(data.previousButton, Button);
    this.next_button = Parser.parseItem<Button>(data.nextButton, Button);
  }

  // XXX: alias for consistency
  get contents() {
    return this.items;
  }
}

export default HorizontalMovieList;