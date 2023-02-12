import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import SearchRefinementCard from './SearchRefinementCard.js';
import Button from './Button.js';
import MacroMarkersListItem from './MacroMarkersListItem.js';

class HorizontalCardList extends YTNode {
  static type = 'HorizontalCardList';

  cards;
  header;
  previous_button;
  next_button;

  constructor(data: any) {
    super();
    this.cards = Parser.parseArray<SearchRefinementCard | MacroMarkersListItem>(data.cards);
    this.header = Parser.parseItem(data.header);
    this.previous_button = Parser.parseItem<Button>(data.previousButton, Button);
    this.next_button = Parser.parseItem<Button>(data.nextButton, Button);
  }
}

export default HorizontalCardList;